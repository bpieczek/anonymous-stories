/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";

import "./index.css";
import App from "./App";
import AllStories from "./components/allStories";
import AddStory from "./components/addStoryForm";
import OneStory from "./components/oneStory";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} /> 
        <Route path="/create" component={AddStory} />
        <Route path="/all" component={AllStories} />
        <Route path="/one" component={OneStory} />
        <Route path="/random" component={OneStory} />
      </Routes>
    </Router>
  ),
  root
);
