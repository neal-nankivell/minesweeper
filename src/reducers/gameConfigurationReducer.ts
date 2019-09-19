import { getType } from "typesafe-actions";
import InitialState from "../types/InitialState";
import { GameAction, configureGame } from "../actions/gameActions";
import AppState from "../types/AppState";

const initialState: AppState = InitialState;

const constrainInput = (num: number) => Math.min(Math.max(num, 5), 50);

const applyGameConfiguration = (
  state: AppState,
  action: ReturnType<typeof configureGame>
): AppState => {
  return {
    ...state,
    gameConfiguration: {
      height: constrainInput(action.payload.height),
      width: constrainInput(action.payload.width),
      mines: Math.min(
        constrainInput(action.payload.mineCount),
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
