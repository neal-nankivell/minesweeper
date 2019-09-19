import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import SetupGameDialogContainer from "../SetupGameDialog/SetupGameDialogContainer";
import GameStatusContainer from "../GameStatus/GameStatusContainer";
import MineCountContainer from "../MineCount/MineCountContainer";
import CellGridContainer from "../CellGrid/CellGridContainer";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1)
  }
}));

export const AppBody: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <SetupGameDialogContainer />
      <GameStatusContainer />
      <MineCountContainer />
      <CellGridContainer />
    </Paper>
  );
};

export default AppBody;
