import React from "react";
import { GameStatusProps } from "./GameStatusProps";

export const GameStatus: React.FC<GameStatusProps> = (
  props: GameStatusProps
) => (
  <div>
    {props.gamePhase} <button onClick={props.restart}>Restart Game</button>
  </div>
);

export default GameStatus;
