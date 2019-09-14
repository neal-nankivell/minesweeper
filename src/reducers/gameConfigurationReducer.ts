import { getType } from "typesafe-actions";
import InitialState from "../types/InitialState";
import { GameAction, configureGame } from "../actions/gameActions";
import AppState from "../types/AppState";

const initialState: AppState = InitialState;

const applyGameConfiguration = (
  state: AppState,
  action: ReturnType<typeof configureGame>
): AppState => {
  return {
    ...state,
    gameConfiguration: {
      height: action.payload.height,
      width: action.payload.width,
      mines: Math.min(
        action.payload.mineCount,
        action.payload.height * action.payload.width
      )
    }
  };
};

export default function gameConfigurationReducer(
  state: AppState = initialState,
  action: GameAction
) {
  switch (action.type) {
    case getType(configureGame):
      return applyGameConfiguration(state, action);
    default:
      return state;
  }
}
