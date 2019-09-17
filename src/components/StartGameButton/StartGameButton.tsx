import React from "react";
import StartGameButtonProps from "./StartGameButtonProps";

export const StartGameButton: React.FC<StartGameButtonProps> = (
  props: StartGameButtonProps
) => <button onClick={props.startGame}>Start Game!</button>;

export default StartGameButton;
