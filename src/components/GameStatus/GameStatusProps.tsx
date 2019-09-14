import GamePhase from "../../types/GamePhase";
export interface GameStatusProps {
  gamePhase: GamePhase;
  restart: () => void;
}
