import { createSignal } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

function OneStory() {
  const [story, setStory] = createSignal({});
  const [isNotRandom, setIsNotRandom] = createSignal(true);

  const fetchStory = async () => {
    let data;
    if (window.location.href.includes("id")) {
      const id = window.location.href.split("?id=");
      data = await axios.get(`/${id[1]}`);
    } else {
      data = await axios.get(`/random`);
      setIsNotRandom(false);
    }

    setStory(data.data[0]);
  };

  return (
    <>
      <NavBar />
      <main onLoad={fetchStory()}>
        <div class="card">
          <h1>
            {story().title} | {story().date}
          </h1>
          <p>{story().content}</p>
        </div>
        <Show when={isNotRandom() === false}>
          <button onClick={() => location.reload()}>New random story</button>
        </Show>
      </main>
      <Footer />
    </>
  );
}

export default OneStory;
