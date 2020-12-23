import React from "react";
import { storiesOf } from "@storybook/react";
import CellGridContainer from "./CellGridContainer";
import withRedux from "../../stories/withRedux";

storiesOf("Components/CellGrid", module)
  .addDecorator(withRedux)
  .add("Redux Container", () => (
    <CellGridContainer />
  ));
