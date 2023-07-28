import { createSignal } from "solid-js";
import axios from "../axios";
import NavBar from "./nav";
import Footer from "./footer";

function OneStory() {
  const [story, setStory] = createSignal({});

  const fetchStory = async () => {
    const id = window.location.href.split("id=");
    let data;
    if (id[1]) data = await axios.get(`/${id[1]}`);
    else data = await axios.get(`/random`);
    setStory(data.data[0]);
  };

  return (
    <>
      <NavBar />
      <div class="card" onLoad={fetchStory()}>
        <h1>
          {story().title} | {story().date}
        </h1>
        <p>{story().content}</p>
      </div>
      <button onClick={() => location.reload()}>New random story</button>
      <Footer />
    </>
  );
}

export default OneStory;
