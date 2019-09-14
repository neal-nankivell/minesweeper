import { createStore } from "redux";
import rootReducer from "./reducers";
import InitialState from "./types/InitialState";

const store = createStore(rootReducer, InitialState);

export default store;
