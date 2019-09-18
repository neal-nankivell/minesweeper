import React from "react";
import ReastartGameButtonProps from "./ReastartGameButtonProps";
import { Button } from "@material-ui/core";

export const RestartGameButton: React.FC<ReastartGameButtonProps> = props => (
  <Button
    onClick={() => props.restartGame()}
    variant="contained"
    disabled={props.disabled}
  >
    New Game
  </Button>
);

export default RestartGameButton;
