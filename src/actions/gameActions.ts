import {
  CONFIGURE_GAME,
  FINISH_GAME,
  RESTART_GAME,
  REVEAL_CELL,
  START_GAME,
  TOGGLE_CELL_FLAG,
  HINT,
  TOGGLE_THEME
} from "./types";
import { ActionType, createStandardAction } from "typesafe-actions";

export const configureGame = createStandardAction(CONFIGURE_GAME).map(
  (config: { height: number; width: number; mineCount: number }) => ({
    payload: config
  })
);

export const revealCell = createStandardAction(REVEAL_CELL).map(
  (cell: number) => ({ payload: { cell } })
);

export const hint = createStandardAction(HINT)();

export const restartGame = createStandardAction(RESTART_GAME)();

export const startGame = createStandardAction(START_GAME)();

export const finishGame = createStandardAction(FINISH_GAME).map(
  (winner: boolean) => ({
    payload: { winner }
  })
);

export const toggleCellFlag = createStandardAction(TOGGLE_CELL_FLAG).map(
  (cell: number) => ({ payload: { cell } })
);

export const toggleTheme = createStandardAction(TOGGLE_THEME)();

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
