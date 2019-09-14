import React from "react";
import { storiesOf } from "@storybook/react";
import CellGrid from "./CellGrid";
import { Provider } from "react-redux";
import store from "../../Store";
import { startGame } from "../../actions/gameActions";

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
        <CellGrid height={10} width={10} />
      </Provider>
    );
  });
