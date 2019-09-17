import "../src/App.css";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import withRedux from "../src/stories/withRedux";

const req = require.context("../src", true, /\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator(withKnobs);
addDecorator(withRedux);
