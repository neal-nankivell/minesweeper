import "./GameStatus.css";
import React from "react";
import { GameStatusProps } from "./GameStatusProps";
import GamePhase from "../../types/GamePhase";

const map = new Map<GamePhase, string>([
  ["InProgress", "😀"],
  ["Setup", "🤔"],
  ["Won", "😎"],
  ["Lost", "😵"]
]);

export const GameStatus: React.FC<GameStatusProps> = (
  props: GameStatusProps
) => {
  return <div className="gameStatus">{map.get(props.gamePhase)}</div>;
};

export default GameStatus;
