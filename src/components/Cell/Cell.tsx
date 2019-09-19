import React from "react";
import CellProps from "./CellProps";
import { makeStyles } from "@material-ui/core";

const useStyles = (revealed: boolean, colorOverride: string | undefined) =>
  makeStyles(theme => {
    const background = revealed
      ? theme.palette.background.default
      : theme.palette.primary.main;
    const color = colorOverride || theme.palette.getContrastText(background);
    return {
      cell: {
        background: background,
        border: `0.5px solid ${theme.palette.divider}`,
        color: color,
        float: "left",
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: "28px",
        height: "28px",
        marginRight: "-1px",
        marginTop: "-1px",
        padding: 0,
        textAlign: "center",
        width: "28px",
        fontFamily: '"Courier New", Courier, monospace',
        userSelect: "none"
      }
    };
  })();

const numberColorMap = ["#859900", "#2aa198", "#268bd2", "#6c71c4"];

const Cell: React.FC<CellProps> = (props: CellProps) => {
  let value: string = "";
  let color: string | undefined = undefined;
  if (!props.isRevealed && props.isFlagged) {
    value = "⚑";
  } else if (props.isRevealed) {
    if (props.isMine) {
      value = "☀";
      color = "#dc322f";
    } else if (props.numberOfNeighbourMines !== 0) {
      value = `${props.numberOfNeighbourMines}`;
      color = numberColorMap[props.numberOfNeighbourMines - 1];
    }
  }

  const classes = useStyles(props.isRevealed, color);
  return (
    <div
      className={classes.cell}
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
