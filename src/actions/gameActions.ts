import {
  CONFIGURE_GAME,
  REVEAL_CELL,
  RESTART_GAME,
  START_GAME,
  TOGGLE_CELL_FLAG
} from "./types";
import { action, ActionType } from "typesafe-actions";

export const configureGame = (
  height: number,
  width: number,
  mineCount: number
) => action(CONFIGURE_GAME, { height, width, mineCount });

export const revealCell = (cell: number) => action(REVEAL_CELL, { cell });

export const restartGame = () => action(RESTART_GAME);

export const startGame = () => action(START_GAME);

export const toggleCellFlag = () => action(TOGGLE_CELL_FLAG);

export type GameAction = ActionType<
  | typeof configureGame
  | typeof restartGame
  | typeof startGame
  | typeof toggleCellFlag
>;
