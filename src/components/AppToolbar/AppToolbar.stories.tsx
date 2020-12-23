import React from "react";
import { storiesOf } from "@storybook/react";
import AppToolbar from "./AppToolbar";
import { withRedux } from "../../stories/withRedux";

storiesOf("Components/App Toolbar", module)
  .addDecorator(withRedux)
  .add("Redux Container", () => (
    <AppToolbar />
  ));
