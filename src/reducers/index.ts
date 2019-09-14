import { Reducer } from "redux";
import AppState from "../types/AppState";
import gameConfigurationReducer from "./gameConfigurationReducer";
import gamePhaseReducer from "./gamePhaseReducer";
import gameStateReducer from "./gameStateReducer";
import InitialState from "../types/InitialState";
import { GameAction } from "../actions/gameActions";

const reduceReducers: (
  initialState: AppState,
  reducers: Reducer<AppState, GameAction>[]
) => Reducer<AppState | undefined, GameAction> = (initialState, reducers) => {
  return (prevState: AppState | undefined, value: GameAction, ...args) => {
    const prevStateIsUndefined = typeof prevState === "undefined";
    const valueIsUndefined = typeof value === "undefined";

    if (prevStateIsUndefined && valueIsUndefined && initialState) {
      return initialState;
    }

    return reducers.reduce((newState, reducer) => {
      return reducer(newState, value, ...args);
    }, prevState);
  };
};

export default reduceReducers(InitialState, [
  gameConfigurationReducer,
  gamePhaseReducer,
  gameStateReducer
]);
