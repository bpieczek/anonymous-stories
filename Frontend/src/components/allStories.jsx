import { createSignal, onMount, For, createMemo } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

import "../scss/AllStories.scss";

function AllStories() {
  const [stories, setStories] = createSignal([]);
  const [loading, setLoading] = createSignal(true);
  const [searchTerm, setSearchTerm] = createSignal("");
  const [searchCategory, setSearchCategory] = createSignal("title"); // Domyślnie szukaj po tytule

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

  const filteredStories = createMemo(() => {
    if (!searchTerm()) return stories();

    const term = searchTerm().toLowerCase();

    return stories().filter((story) => {
      switch (searchCategory()) {
        case "title":
          return story.title.toLowerCase().includes(term);
        case "author":
          return (story.author || "Anonymous").toLowerCase().includes(term);
        case "content":
          return story.content.toLowerCase().includes(term);
        case "id":
          return story._id.toLowerCase().includes(term);
        case "all":
        default:
          return (
            story.title.toLowerCase().includes(term) ||
            (story.author || "Anonymous").toLowerCase().includes(term) ||
            story.content.toLowerCase().includes(term) ||
            story._id.toLowerCase().includes(term)
          );
      }
    });
  });

  return (
    <>
      <NavBar />
      <main>
        <div class="search-container">
          <div class="search-controls">
            <input
              type="text"
              placeholder="Search stories..."
              value={searchTerm()}
              onInput={(e) => setSearchTerm(e.target.value)}
            />

            <select
              value={searchCategory()}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="all">All fields</option>
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="content">Content</option>
              <option value="id">ID</option>
            </select>
          </div>

          <div class="link-container">
            <Show when={!loading()} fallback={<p>Loading stories...</p>}>
              <For
                each={filteredStories()}
                fallback={<p>No matching stories found</p>}
              >
                {(story) => (
                  <div class="story-item">
                    <a className="btn-rainbow" href={"/one?id=" + story._id}>
                      {story.title}
                    </a>
                    <div class="story-author">
                      {story.author || "Anonymous"}
                    </div>
                  </div>
                )}
              </For>
            </Show>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AllStories;
