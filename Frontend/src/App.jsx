import "./scss/App.scss";
import NavBar from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <h1>Story Archive: Where Voices Echo Through Time</h1>
        <h2>Welcome to Story Archive:</h2>
        <p>
          Step into a timeless library of human experience. Story Archive is a
          permanent repository where tales live forever, allowing you to share
          your unique perspective while choosing your identity. Craft your
          stories anonymously or under your chosen username - each narrative
          becomes an indelible part of our collective history.
        </p>

        <h2>Identity by Choice:</h2>
        <p>
          You control how you're remembered. Share as "Anonymous" to let your
          words stand alone, or claim your story with a username to build your
          legacy. Every choice is respected in our judgment-free sanctuary where
          authenticity thrives without fear of repercussion.
        </p>

        <h2>Share With Purpose:</h2>
        <p>
          Your stories become permanent artifacts in our digital archive. Before
          sharing, remember: every submission is final and cannot be removed.
          Share thoughtfully as your words will endure for future generations to
          discover and reflect upon.
        </p>

        <h2>Discover Hidden Treasures:</h2>
        <p>
          Explore our ever-growing collection through the "All Stories" gallery
          with powerful search tools, or embrace serendipity with "Random"
          journeys. Uncover unexpected connections, traverse diverse worlds, and
          find inspiration in voices both familiar and unknown.
        </p>

        <h2>Your Digital Legacy:</h2>
        <p>
          What story will you add to humanity's ongoing narrative? Whether a
          fleeting moment or epic saga, your contribution becomes part of a
          living archive - a permanent testament to our shared human experience
          across time and space.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default App;
