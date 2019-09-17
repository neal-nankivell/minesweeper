import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";

import CellGridContainer from "./components/CellGrid/CellGridContainer";
import ConfigurationEditorContainer from "./components/ConfigurationEditor/ConfigurationEditorContainer";
import GameStatusContainer from "./components/GameStatus/GameStatusContainer";
import HintButtonContainer from "./components/HintButton/HintButtonContainer";
import MineCountContainer from "./components/MineCount/MineCountContainer";
import StartGameButtonContainer from "./components/StartGameButton/StartGameButtonContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigurationEditorContainer />
      <GameStatusContainer />
      <HintButtonContainer />
      <StartGameButtonContainer />
      <MineCountContainer />
      <CellGridContainer />
    </Provider>
  );
};

export default App;
