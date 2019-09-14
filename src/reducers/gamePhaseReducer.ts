import { getType } from "typesafe-actions";
import InitialState from "../types/InitialState";
import {
  GameAction,
  restartGame,
  startGame,
  finishGame
} from "../actions/gameActions";
import AppState from "../types/AppState";

const initialState: AppState = InitialState;

const applyRestartGame = (
  state: AppState,
  action: ReturnType<typeof restartGame>
): AppState => {
  return { ...state, gamePhase: "Setup" };
};

const applyStartGame = (
  state: AppState,
  action: ReturnType<typeof startGame>
): AppState => {
  return { ...state, gamePhase: "InProgress" };
};

const applyFinishGame = (
  state: AppState,
  action: ReturnType<typeof finishGame>
): AppState => {
  return { ...state, gamePhase: action.payload.winner ? "Won" : "Lost" };
};

export default function gamePhaseReducer(
  state: AppState = initialState,
  action: GameAction
) {
  switch (action.type) {
    case getType(restartGame):
      return applyRestartGame(state, action);
    case getType(startGame):
      return applyStartGame(state, action);
    case getType(finishGame):
      return applyFinishGame(state, action);
    default:
      return state;
  }
}
