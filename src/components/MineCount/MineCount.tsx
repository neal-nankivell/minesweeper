import React from "react";
import MineCountProps from "./MineCountProps";

export const MineCount: React.FC<MineCountProps> = props => (
  <div>Mines:{props.mineCount}</div>
);

export default MineCount;
