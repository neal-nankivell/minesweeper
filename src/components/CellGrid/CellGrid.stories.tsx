import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../../Store";
import GameStatusContainer from "../GameStatus/GameStatusContainer";
import CellGridContainer from "./CellGridContainer";
import HintButtonContainer from "../HintButton/HintButtonContainer";

storiesOf("CellGrid", module).add("Starting Grid", () => {
  let demoStore = store;
  return (
    <Provider store={demoStore}>
      <GameStatusContainer />
      <HintButtonContainer />
      <CellGridContainer />
    </Provider>
  );
});
