import React from "react";
import { storiesOf } from "@storybook/react";
import MineCount from "./MineCount";
import { number } from "@storybook/addon-knobs";
import MineCountContainer from "./MineCountContainer";

storiesOf("Mine Count", module)
  .add("Basic States", () => (
    <MineCount
      mineCount={number("Unaccounted for Mines", 10, undefined, "Props")}
    />
  ))
  .add("Redux Container", () => <MineCountContainer />);
