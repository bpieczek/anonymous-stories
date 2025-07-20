/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";

import "./scss/index.scss";
import App from "./App";
import AllStories from "./components/allStories";
import AddStory from "./components/addStoryForm";
import OneStory from "./components/oneStory";

const root = document.getElementById("root");

render(
  () => (
    <HashRouter>
      <Route path="/" component={App} />
      <Route path="/create" component={AddStory} />
      <Route path="/all" component={AllStories} />
      <Route path="/one/:id?" component={OneStory} />
      <Route path="/random" component={OneStory} />
    </HashRouter>
  ),
  root
);
