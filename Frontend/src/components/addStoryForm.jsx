import { createSignal } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";
import "../scss/StoryForm.scss";

function StoryForm() {
  const [title, setTitle] = createSignal("");
  const [content, setContent] = createSignal("");
  const [username, setUsername] = createSignal("");
  const [isAnonymous, setIsAnonymous] = createSignal(true);
  const [isHidden, setIsHidden] = createSignal(false);
  const [modalMessage, setModalMessage] = createSignal("");

  const AddStory = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/add", {
        title: title(),
        content: content(),
        author: isAnonymous() ? "Anonymous" : username() || "Anonymous",
      });

      setTitle("");
      setContent("");
      setUsername("");
      setIsAnonymous(true);
      setModalMessage("Your story was added!");
    } catch (error) {
      setModalMessage(error.response.data.message);
    }
    setIsHidden(true);
    setTimeout(() => setIsHidden(false), 1500);
  };

  return (
    <>
      <NavBar className={isHidden() ? "blur-it" : ""} />
      <main className={isHidden() ? "StoryForm blur-it" : "StoryForm"}>
        <div class="permanent-notice">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <p>
            Stories are added permanently and cannot be deleted. By submitting,
            you agree to this.
          </p>
        </div>

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
            <label for="Title" class="Title_label">
              Title
            </label>
          </div>

          <div className="author-section">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="stayAnonymous"
                checked={isAnonymous()}
                onChange={(e) => setIsAnonymous(e.target.checked)}
              />
              <label for="stayAnonymous">Stay anonymous</label>
            </div>

            {!isAnonymous() && (
              <div className="Title_group field">
                <input
                  type="text"
                  maxLength={25}
                  placeholder="Your username"
                  onInput={(e) => setUsername(e.target.value)}
                  name="Username"
                  id="Username"
                  class="Title_field"
                  value={username()}
                />
                <label for="Username" class="Title_label">
                  Your username
                </label>
              </div>
            )}
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
