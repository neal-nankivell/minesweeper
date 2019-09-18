import "./Cell.css";
import React from "react";
import CellProps from "./CellProps";
import { ButtonBase } from "@material-ui/core";

const numberColorMap = [
  "#859900",
  "#2aa198",
  "#268bd2",
  "#6c71c4",
  "#586e75",
  "#073642",
  "#002b36",
  "#002b36"
];

const Cell: React.FC<CellProps> = (props: CellProps) => {
  let value: string = "";
  let color: string = "#93a1a1";
  if (!props.isRevealed && props.isFlagged) {
    value = "⚑";
    //color = "#cb4b16";
  } else if (props.isRevealed) {
    if (props.isMine) {
      value = "☀";
      color = "#dc322f";
    } else if (props.numberOfNeighbourMines !== 0) {
      value = `${props.numberOfNeighbourMines}`;
      color = numberColorMap[props.numberOfNeighbourMines - 1];
    }
  }
  return (
    <ButtonBase>
      <div
        style={{ color: color }}
        className={`cell ${props.isRevealed ? "revealed" : ""}`}
        onClick={props.onClick}
        onContextMenu={e => {
          e.preventDefault();
          e.stopPropagation();
          props.onContextMenu();
          return false;
        }}
      >
        {value}
      </div>
    </ButtonBase>
  );
};

export default Cell;
