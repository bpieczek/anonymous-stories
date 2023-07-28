import { A } from "@solidjs/router";

const NavBar = () => {
  return (
    <nav>
      <A href="/">Home</A> <A href="/create">Add Story</A>{" "}
      <A href="/all">All Stories</A> <A href="/random">Random Story</A>
    </nav>
  );
};

export default NavBar;
