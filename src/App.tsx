import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import GameStatusContainer from "./components/GameStatus/GameStatusContainer";
import HintButtonContainer from "./components/HintButton/HintButtonContainer";
import CellGridContainer from "./components/CellGrid/CellGridContainer";
import store from "./Store";
import StartGameButtonContainer from "./components/StartGameButton/StartGameButtonContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GameStatusContainer />
      <HintButtonContainer />
      <StartGameButtonContainer />
      <CellGridContainer />
    </Provider>
  );
};

export default App;
