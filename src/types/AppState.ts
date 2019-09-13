import GamePhase from "./GamePhase";
import GameState from "./GameState";

export interface AppState {
  gamePhase: GamePhase;
  gameState: GameState;
}

export default AppState;
