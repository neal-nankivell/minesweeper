import GamePhase from "./GamePhase";
import GameState from "./GameState";
import GameConfiguration from "./GameConfiguration";

export interface AppState {
  gamePhase: GamePhase;
  gameConfiguration: GameConfiguration;
  gameState: GameState;
}

export default AppState;
