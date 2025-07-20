/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter, Route, Routes } from "@solidjs/router"; // 1. Zmiana importu

import "./scss/index.scss";
import App from "./App";
import AllStories from "./components/allStories";
import AddStory from "./components/addStoryForm";
import OneStory from "./components/oneStory";

const root = document.getElementById("root");

render(
  () => (
    <HashRouter>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/create" component={AddStory} />
        <Route path="/all" component={AllStories} />
        <Route path="/one" component={OneStory} />
        <Route path="/random" component={OneStory} />
      </Routes>
    </HashRouter>
  ),
  root
);
