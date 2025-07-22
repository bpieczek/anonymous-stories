import { createSignal, onMount, Show } from "solid-js";
import { useParams, useLocation } from "@solidjs/router";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

import "../scss/OneStory.scss";

function OneStory() {
  const params = useParams();
  const location = useLocation();
  const [story, setStory] = createSignal(null);
  const [isRandomPage, setIsRandomPage] = createSignal(false);
  const [loading, setLoading] = createSignal(true);

  const fetchStory = async () => {
    try {
      setLoading(true);
      let response;
      const isRandomRoute = location.pathname === "/random";

      if (params.id) {
        response = await axios.get(`/${params.id}`);
        setIsRandomPage(false);
      } else if (new URLSearchParams(location.search).get("id")) {
        const id = new URLSearchParams(location.search).get("id");
        response = await axios.get(`/${id}`);
        setIsRandomPage(false);
      } else if (isRandomRoute) {
        response = await axios.get(`/random`);
        setIsRandomPage(true);
      } else {
        response = await axios.get(`/${params.id}`);
        setIsRandomPage(false);
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
            <div className="item2">
              <div>{story()?.author || "Anonymous"}</div>
              <date>{story()?.date || ""}</date>
            </div>
          </header>
          <p className="storyHolder">
            {story()?.content || "No content available"}
          </p>
          <Show when={isRandomPage()}>
            <button onClick={fetchStory}>New random story</button>
          </Show>
        </Show>
      </main>
      <Footer />
    </>
  );
}

export default OneStory;
