import React from "react";
import { RenderFunction, StoryDecorator } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../Store";
import { number, select } from "@storybook/addon-knobs/react";
import {
  configureGame,
  startGame,
  hint,
  revealCell,
  toggleCellFlag,
  restartGame
} from "../actions/gameActions";
import GamePhase from "../types/GamePhase";
import AppState from "../types/AppState";
import InitialState from "../types/InitialState";

export const withRedux: StoryDecorator = (getStory: RenderFunction) => {
  const demoStore = store;

  const groupId = "Redux State";

  const initialState = InitialState;

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
    let state = store.getState() as AppState;

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

  return <Provider store={demoStore}>{getStory()}</Provider>;
};

export default withRedux;