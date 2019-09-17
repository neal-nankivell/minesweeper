import React from "react";
import { storiesOf } from "@storybook/react";
import GameStatusContainer from "../GameStatus/GameStatusContainer";
import CellGridContainer from "./CellGridContainer";
import HintButtonContainer from "../HintButton/HintButtonContainer";

storiesOf("CellGrid", module).add("Starting Grid", () => {
  return (
    <>
      <GameStatusContainer />
      <HintButtonContainer />
      <CellGridContainer />
    </>
  );
});
