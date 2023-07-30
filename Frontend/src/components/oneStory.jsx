import { createSignal } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

import "../scss/OneStory.scss";

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
        <header className="container">
          <h1 className="item1">{story().title}</h1>
          <date className="item2">{story().date}</date>
        </header>

        <p className="storyHolder">{story().content}</p>
        <Show when={isNotRandom() === false}>
          <button onClick={() => location.reload()}>New random story</button>
        </Show>
      </main>
      <Footer />
    </>
  );
}

export default OneStory;
