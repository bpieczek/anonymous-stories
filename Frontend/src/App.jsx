import "./scss/App.scss";
import NavBar from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <h1>Anonymous Stories: Where Tales Unveil Unseen Worlds</h1>
        <h2>Welcome to Anonymous Stories:</h2>
        <p>
          Step into a realm of limitless imagination and heartfelt confessions
          with Anonymous Stories. Here, storytelling is an art without
          boundaries, allowing you to unleash your creativity without the burden
          of identity. Share your deepest emotions, weave thrilling adventures,
          or craft unforgettable memories - all while remaining completely
          anonymous.
        </p>
        <h2>Anonymity Unleashed:</h2>
        <p>
          At Anonymous Stories, we embrace the power of anonymous storytelling.
          Express yourself without any inhibitions, as we ensure your privacy is
          safeguarded at every step. Our platform is a judgment-free zone,
          encouraging you to narrate your stories without the fear of judgment
          or repercussion.
        </p>
        <h2>Share Your Story:</h2>
        <p>
          Every tale is precious, and yours deserves to be heard. Share your
          personal experiences, fictional wonders, or heartfelt musings with the
          world. Anonymous Stories is a canvas that embraces the beauty of
          diverse narratives, amplifying each unique voice that graces its
          pages.
        </p>
        <h2>Embrace the Unknown with "Random" Reads:</h2>
        <p>
          Seeking the thrill of surprise? Click on "Random" and let serendipity
          guide your literary journey. Discover hidden gems, traverse uncharted
          worlds, and revel in the unexpected as each random story unfolds
          before your eyes.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default App;
