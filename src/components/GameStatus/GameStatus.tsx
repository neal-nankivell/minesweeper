import React from "react";
import { GameStatusProps } from "./GameStatusProps";

export const GameStatus: React.FC<GameStatusProps> = (
  props: GameStatusProps
) => {
  var restartGameButton = <button onClick={props.restart}>Restart Game</button>;
  var startGameButton = <button onClick={props.start}>Start Game</button>;
  return (
    <div>
      <p>{props.gamePhase}</p>
      <p>Mines: {props.mines}</p>
      <p>Flags: {props.flags}</p>
      {props.gamePhase == "Setup" ? startGameButton : restartGameButton}
    </div>
  );
};

export default GameStatus;
