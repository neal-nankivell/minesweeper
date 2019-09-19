import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import SetupGameDialogContainer from "../SetupGameDialog/SetupGameDialogContainer";
import GameStatusContainer from "../GameStatus/GameStatusContainer";
import MineCountContainer from "../MineCount/MineCountContainer";
import CellGridContainer from "../CellGrid/CellGridContainer";

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1),
    maxWidth: "100%",
    minHeight: "100%",
    height: "100%"
  }
}));

export const AppBody: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <SetupGameDialogContainer />
      <GameStatusContainer />
      <MineCountContainer />
      <CellGridContainer />
    </Container>
  );
};

export default AppBody;
