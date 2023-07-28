import { createSignal } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

function AllStories() {
  const [stories, setStories] = createSignal([]);

  const fetchStories = async () => {
    const data = await axios.get("/");
    setStories(data.data);
  };

  return (
    <>
      <NavBar />
      <div class="card" onLoad={fetchStories()}>
        <For each={stories()} fallback={<p>Loading...</p>}>
          {(story) => (
            <a href={"/one?id=" + story._id}>
              <button>{story.title}</button>
            </a>
          )}
        </For>
      </div>
      <Footer />
    </>
  );
}

export default AllStories;
