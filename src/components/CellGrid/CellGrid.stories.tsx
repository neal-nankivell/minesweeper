import React from "react";
import { storiesOf } from "@storybook/react";
import CellGrid from "./CellGrid";
import { Provider } from "react-redux";
import store from "../../Store";
import { startGame } from "../../actions/gameActions";
import GameStatusContainer from "../GameStatus/GameStatusContainer";
import CellGridContainer from "./CellGridContainer";

storiesOf("CellGrid", module)
  //   .addDecorator(component => {
  //     let demoStore = store;
  //     demoStore.dispatch(startGame());
  //     return <Provider store={demoStore}>{component}</Provider>;
  //   })
  .add("Starting Grid", () => {
    let demoStore = store;
    demoStore.dispatch(startGame());
    return (
      <Provider store={demoStore}>
        <GameStatusContainer />
        <CellGridContainer />
      </Provider>
    );
  });
