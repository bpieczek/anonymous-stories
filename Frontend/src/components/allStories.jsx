import { createSignal } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

import "../scss/AllStories.scss";

function AllStories() {
  const [stories, setStories] = createSignal([]);

  const fetchStories = async () => {
    const data = await axios.get("/");
    setStories(data.data);
  };

  return (
    <>
      <NavBar />
      <main className="link-container" onLoad={fetchStories()}>
        <For each={stories()} fallback={<p>Loading...</p>}>
          {(story) => (
            <a
              className="btn-rainbow"
              style={story.title.length > 15 ? "grid-column: span 2 ;" : ""}
              href={"/one?id=" + story._id}
            >
              {story.title}
            </a>
          )}
        </For>
      </main>
      <Footer />
    </>
  );
}

export default AllStories;
