import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";

import CellGridContainer from "./components/CellGrid/CellGridContainer";
import GameStatusContainer from "./components/GameStatus/GameStatusContainer";
import HintButtonContainer from "./components/HintButton/HintButtonContainer";
import MineCountContainer from "./components/MineCount/MineCountContainer";
import SetupGameDialogContainer from "./components/SetupGameDialog/SetupGameDialogContainer";
import RestartGameButtonContainer from "./components/RestartGameButton/RestartGameButtonContainer";
import {
  Container,
  makeStyles,
  AppBar,
  Typography,
  Toolbar
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    flexGrow: 1
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MineSweeper
          </Typography>
          <HintButtonContainer />
          <RestartGameButtonContainer />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xl">
        <div className={classes.paper}>
          <SetupGameDialogContainer />
          <GameStatusContainer />
          <MineCountContainer />
          <CellGridContainer />
        </div>
      </Container>
    </Provider>
  );
};

export default App;
