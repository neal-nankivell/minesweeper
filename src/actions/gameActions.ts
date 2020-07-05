import {
  CONFIGURE_GAME,
  FINISH_GAME,
  RESTART_GAME,
  REVEAL_CELL,
  START_GAME,
  TOGGLE_CELL_FLAG,
  HINT,
  TOGGLE_THEME,
} from "./types";
import { ActionType, createAction } from "typesafe-actions";

export const configureGame = createAction(
  CONFIGURE_GAME,
  (config: { height: number; width: number; mineCount: number }) => config
)();

export const revealCell = createAction(REVEAL_CELL, (cell: number) => ({
  cell,
}))();

export const hint = createAction(HINT)();

export const restartGame = createAction(RESTART_GAME)();

export const startGame = createAction(START_GAME)();

export const finishGame = createAction(FINISH_GAME, (winner: boolean) => ({
  winner,
}))();

export const toggleCellFlag = createAction(
  TOGGLE_CELL_FLAG,
  (cell: number) => ({ cell })
)();

export const toggleTheme = createAction(TOGGLE_THEME)();

export type GameAction = ActionType<
  | typeof configureGame
  | typeof restartGame
  | typeof startGame
  | typeof finishGame
  | typeof toggleCellFlag
  | typeof revealCell
  | typeof hint
  | typeof toggleTheme
>;
