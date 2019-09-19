import React from "react";
import { AppBar, Typography, makeStyles, Toolbar } from "@material-ui/core";
import HintButtonContainer from "../HintButton/HintButtonContainer";
import RestartGameButtonContainer from "../RestartGameButton/RestartGameButtonContainer";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));

export const AppToolbar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          MineSweeper
        </Typography>
        <HintButtonContainer />
        <RestartGameButtonContainer />
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
