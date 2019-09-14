import "./Cell.css";
import React from "react";
import CellProps from "./CellProps";

const Cell: React.FC<CellProps> = (props: CellProps) => {
  let value: string = "";
  if (!props.isRevealed && props.isFlagged) {
    value = "⚑";
  } else if (props.isRevealed) {
    if (props.isMine) {
      value = "☀";
    } else if (props.numberOfNeighbourMines !== 0) {
      value = `${props.numberOfNeighbourMines}`;
    }
  }
  return (
    <div
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
  );
};

export default Cell;
