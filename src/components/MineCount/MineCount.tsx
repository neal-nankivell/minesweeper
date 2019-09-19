import React from "react";
import MineCountProps from "./MineCountProps";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mineCount: {
    color: theme.palette.getContrastText(theme.palette.background.default)
  }
}));

export const MineCount: React.FC<MineCountProps> = props => (
  <Typography className={useStyles().mineCount}>
    Mines:{props.mineCount}
  </Typography>
);

export default MineCount;
