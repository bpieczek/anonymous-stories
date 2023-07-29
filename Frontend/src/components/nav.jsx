import { A } from "@solidjs/router";
import "../scss/Nav.scss";
const NavBar = () => {
  return (
    <nav>
      <A href="/">Home</A> <A href="/create">Add Story</A>{" "}
      <A href="/all">All Stories</A> <A href="/random">Random Story</A>
      <div id="indicator"></div>
    </nav>
  );
};

export default NavBar;
