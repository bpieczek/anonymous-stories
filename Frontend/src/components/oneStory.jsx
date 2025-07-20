import { createSignal, onMount, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

import "../scss/OneStory.scss";

function OneStory() {
  const params = useParams();
  const [story, setStory] = createSignal(null); // Zmiana z {} na null
  const [isNotRandom, setIsNotRandom] = createSignal(true);
  const [loading, setLoading] = createSignal(true); // Dodaj stan ładowania

  const fetchStory = async () => {
    try {
      setLoading(true);
      let response;

      if (params.id) {
        response = await axios.get(`/${params.id}`);
        setIsNotRandom(true);
      } else {
        response = await axios.get(`/random`);
        setIsNotRandom(false);
      }
      if (window.location.href.includes("id")) {
        const id = window.location.href.split("?id=")[1];
        response = await axios.get(`/${id}`);
        setIsNotRandom(true);
      } else {
        response = await axios.get(`/random`);
        setIsNotRandom(false);
      }

      if (response.data && response.data.length > 0) {
        setStory(response.data[0]);
      } else {
        setStory({
          title: "Story not found",
          content: "The requested story does not exist",
        });
      }
    } catch (error) {
      console.error("Error fetching story:", error);
      setStory({
        title: "Error",
        content: "Failed to load the story",
      });
    } finally {
      setLoading(false);
    }
  };

  onMount(fetchStory);

  return (
    <>
      <NavBar />
      <main>
        <Show when={!loading()} fallback={<p>Loading...</p>}>
          <header className="container">
            <h1 className="item1">{story()?.title || "No title"}</h1>
            <date className="item2">{story()?.date || ""}</date>
          </header>
          <p className="storyHolder">
            {story()?.content || "No content available"}
          </p>
          <Show when={!isNotRandom()}>
            <button onClick={fetchStory}>New random story</button>
          </Show>
        </Show>
      </main>
      <Footer />
    </>
  );
}

export default OneStory;
