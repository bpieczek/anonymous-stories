import { createSignal } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

function StoryForm() {
  const [title, setTitle] = createSignal("");
  const [content, setContent] = createSignal("");

  const AddStory = (e) => {
    e.preventDefault();
    axios.post("/add", { title: title(), content: content() });
  };
  return (
    <>
      <NavBar />
      <div class="card">
        <form onSubmit={AddStory}>
          <label>
            Title:{" "}
            <input
              type="text"
              maxLength={25}
              required
              onInput={(e) => setTitle(e.target.value)}
            />
          </label>

          <textarea
            placeholder="Write your story here..."
            required
            onInput={(e) => setContent(e.target.value)}
          ></textarea>
          <button>Add Story</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default StoryForm;
