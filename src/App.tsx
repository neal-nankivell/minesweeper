import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";

import CellGridContainer from "./components/CellGrid/CellGridContainer";
import GameStatusContainer from "./components/GameStatus/GameStatusContainer";
import HintButtonContainer from "./components/HintButton/HintButtonContainer";
import MineCountContainer from "./components/MineCount/MineCountContainer";
import SetupGameDialogContainer from "./components/SetupGameDialog/SetupGameDialogContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SetupGameDialogContainer />
      <GameStatusContainer />
      <HintButtonContainer />
      <MineCountContainer />
      <CellGridContainer />
    </Provider>
  );
};

export default App;
