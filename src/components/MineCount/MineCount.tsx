import React from "react";
import MineCountProps from "./MineCountProps";
import { Typography } from "@material-ui/core";

export const MineCount: React.FC<MineCountProps> = props => (
  <Typography>Mines:{props.mineCount}</Typography>
);

export default MineCount;
