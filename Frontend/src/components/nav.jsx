import { A } from "@solidjs/router";
import "../scss/Nav.scss";
import { createSignal } from "solid-js";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        class="mobile-overlay"
        classList={{ open: isMenuOpen() }}
        onClick={closeMenu}
      ></div>
      <div class="nav-container">
        {" "}
        {/* Dodany kontener */}
        <nav>
          <div
            class="hamburger"
            classList={{ open: isMenuOpen() }}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="nav-links" classList={{ open: isMenuOpen() }}>
            <A href="/" onClick={closeMenu}>
              Home
            </A>
            <A href="/create" onClick={closeMenu}>
              Add Story
            </A>
            <A href="/all" onClick={closeMenu}>
              All Stories
            </A>
            <A href="/random" onClick={closeMenu}>
              Random Story
            </A>
            <div id="indicator"></div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
