import { getType } from "typesafe-actions";
import InitialState from "../types/InitialState";
import { GameAction, toggleTheme } from "../actions/gameActions";
import AppState from "../types/AppState";

const initialState: AppState = InitialState;

const applyToggleTheme = (
  state: AppState,
  action: ReturnType<typeof toggleTheme>
): AppState => {
  return { ...state, theme: state.theme === "light" ? "dark" : "light" };
};

export default function themeReducer(
  state: AppState = initialState,
  action: GameAction
) {
  switch (action.type) {
    case getType(toggleTheme):
      return applyToggleTheme(state, action);
    default:
      return state;
  }
}
