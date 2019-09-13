import "./Cell.css";
import React from "react";

export interface CellProps {
  isRevealed: boolean;
  isFlagged: boolean;
  isMine: boolean;
  numberOfNeighbourMines: number;
  onClick: () => void;
  onContextMenu: () => void;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  let value: string = "";
  if (!props.isRevealed && props.isFlagged) {
    value = "⚑";
  } else if (props.isRevealed) {
    if (props.isMine) {
      value = "☀";
    } else if (props.numberOfNeighbourMines !== 0) {
      value = props.numberOfNeighbourMines.toString();
    }
  }
  return (
    <div
      className={`cell ${props.isRevealed ? "revealed" : ""}`}
      onClick={props.onClick}
      onContextMenu={props.onContextMenu}
    >
      {value}
    </div>
  );
};

export default Cell;
