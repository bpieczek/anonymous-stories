import { createSignal } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";
import "../scss/StoryForm.scss";

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
      <main className="StoryForm">
        <form onSubmit={AddStory}>
          <div class="Title_group field">
            <input
              type="text"
              maxLength={25}
              placeholder="Title"
              onInput={(e) => setTitle(e.target.value)}
              name="Title"
              id="Title"
              class="Title_field"
              required
            />
            <lable for="Title" class="Title_label">
              Title
            </lable>
          </div>

          <textarea
            placeholder="Write your story here..."
            required
            onInput={(e) => setContent(e.target.value)}
          ></textarea>
          <button>Add Story</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default StoryForm;
