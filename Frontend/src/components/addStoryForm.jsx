import { createSignal } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";
import "../scss/StoryForm.scss";

function StoryForm() {
  const [title, setTitle] = createSignal("");
  const [content, setContent] = createSignal("");
  const [isHidden, setIsHidden] = createSignal(false);
  const [modalMessage, setModalMessage] = createSignal("");

  const AddStory = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/add", { title: title(), content: content() });
      setTitle("");
      setContent("");
      setModalMessage("Your story was added!");
    } catch (error) {
      setModalMessage(error.response.data.message);
    }
    setIsHidden(true);
    setTimeout(() => setIsHidden(false), 2000);
  };

  return (
    <>
      <NavBar className={isHidden() ? "blur-it" : ""} />
      <main className={isHidden() ? "StoryForm blur-it" : "StoryForm"}>
        <form onSubmit={AddStory}>
          <div className="Title_group field">
            <input
              type="text"
              maxLength={25}
              placeholder="Title"
              onInput={(e) => setTitle(e.target.value)}
              name="Title"
              id="Title"
              class="Title_field"
              value={title()}
              required
            />
            <lable for="Title" class="Title_label">
              Title
            </lable>
          </div>

          <textarea
            placeholder="Write your story here..."
            onInput={(e) => setContent(e.target.value)}
            value={content()}
            required
          ></textarea>
          <button>Add Story</button>
        </form>
      </main>
      <div className={isHidden() ? "modal-wrapper open" : "modal-wrapper"}>
        <div className="modal">
          <div
            className="head"
            style={
              modalMessage() !== "Your story was added!"
                ? "background:#e2525c  ;"
                : ""
            }
          ></div>
          <div
            className="content"
            style={
              modalMessage() !== "Your story was added!" ? "color:#e2525c;" : ""
            }
          >
            <h1>{modalMessage()}</h1>
          </div>
        </div>
      </div>
      <Footer className={isHidden() ? "blur-it" : ""} />
    </>
  );
}

export default StoryForm;
