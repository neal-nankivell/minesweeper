import React from "react";
import { makeDecorator } from "@storybook/addons";
import { Provider } from "react-redux";
import store from "../Store";
import { number, select } from "@storybook/addon-knobs/react";
import {
  configureGame,
  startGame,
  hint,
  revealCell,
  toggleCellFlag,
  restartGame,
  toggleTheme
} from "../actions/gameActions";
import GamePhase from "../types/GamePhase";
import AppState from "../types/AppState";
import InitialState from "../types/InitialState";
import ThemeContainer from "../components/ThemeContainer/ThemeContainer";

export const withRedux = makeDecorator({
  name: "withRedux",
  parameterName: "_",
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context) => {
    const demoStore = store;
    const groupId = "Redux State";
    let state = store.getState() as AppState;

    const initialState = InitialState;

    const theme = select(
      "Theme",
      { ["Light"]: "light", ["Dark"]: "dark" },
      "light",
      groupId
    );

    if (theme !== state.theme) {
      store.dispatch(toggleTheme());
    }

    const width = number(
      "Grid Width",
      initialState.gameConfiguration.width,
      undefined,
      groupId
    );
    const height = number(
      "Grid Height",
      initialState.gameConfiguration.height,
      undefined,
      groupId
    );
    const mineCount = number(
      "Mine Count",
      initialState.gameConfiguration.mines,
      undefined,
      groupId
    );
    const gamePhase = select<GamePhase>(
      "Game Phase",
      {
        ["Setup"]: "Setup",
        ["In Progress"]: "InProgress",
        ["Won"]: "Won",
        ["Lost"]: "Lost"
      },
      "InProgress",
      groupId
    );

    store.dispatch(restartGame());
    store.dispatch(configureGame({ height, width, mineCount }));

    if (gamePhase !== "Setup") {
      store.dispatch(startGame());
      state = store.getState() as AppState;
      for (let i = 0; i < state.gameState.minePositions.length / 2; i++) {
        if (state.gameState.minePositions[i] === true) {
          store.dispatch(toggleCellFlag(i));
        }
      }

      let movesPlayed = (height * width - mineCount) / 3;
      if (gamePhase === "Won") {
        movesPlayed = height * width;
      }

      for (let i = 0; i < movesPlayed; i++) {
        store.dispatch(hint());
      }

      if (gamePhase === "Lost") {
        var mineIndex = state.gameState.minePositions.indexOf(true);
        store.dispatch(toggleCellFlag(mineIndex));
        store.dispatch(revealCell(mineIndex));
      }
    }

    return (
      <Provider store={demoStore}>
        <ThemeContainer>{getStory(context)}</ThemeContainer>
      </Provider>
    );
  }
});

export default withRedux;
