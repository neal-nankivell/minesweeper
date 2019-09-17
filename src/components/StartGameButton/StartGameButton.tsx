import React from "react";
import StartGameButtonProps from "./StartGameButtonProps";

export const StartGameButton: React.FC<StartGameButtonProps> = (
  props: StartGameButtonProps
) => (
  <button onClick={props.startGame} disabled={props.disabled}>
    Start Game!
  </button>
);

export default StartGameButton;
