import React from "react";
import { storiesOf } from "@storybook/react";
import AppBody from "./AppBody";
import withRedux from "../../stories/withRedux";

storiesOf("Components/App Body", module)
  .addDecorator(withRedux)
  .add("Redux Container", () => (
    <AppBody />
  ));
