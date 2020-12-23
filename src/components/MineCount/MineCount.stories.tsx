import React from "react";
import { storiesOf } from "@storybook/react";
import MineCount from "./MineCount";
import { number } from "@storybook/addon-knobs";
import MineCountContainer from "./MineCountContainer";
import withRedux from "../../stories/withRedux";

storiesOf("Components/Mine Count", module)
  .addDecorator(withRedux)
  .add("Basic States", () => (
    <MineCount
      mineCount={number("Unaccounted for Mines", 10, undefined, "Props")}
    />
  ))
  .add("Redux Container", () => <MineCountContainer />);
