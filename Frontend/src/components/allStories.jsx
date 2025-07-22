import { createSignal, onMount, For } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

import "../scss/AllStories.scss";

function AllStories() {
  const [stories, setStories] = createSignal([]);
  const [loading, setLoading] = createSignal(true);

  const fetchStories = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/");
      setStories(response.data || []);
    } catch (error) {
      console.error("Error fetching stories:", error);
      setStories([]);
    } finally {
      setLoading(false);
    }
  };

  onMount(fetchStories);

  return (
    <>
      <NavBar />
      <main className="link-container">
        <Show when={!loading()} fallback={<p>Loading stories...</p>}>
          <For each={stories()} fallback={<p>No stories found</p>}>
            {(story) => (
              <a className="btn-rainbow" href={"/one?id=" + story._id}>
                {story.title}
              </a>
            )}
          </For>
        </Show>
      </main>
      <Footer />
    </>
  );
}

export default AllStories;
