import GamePhase from "../../types/GamePhase";
export interface GameStatusProps {
  gamePhase: GamePhase;
  mines: number;
  flags: number;
  restart: () => void;
  start: () => void;
}
