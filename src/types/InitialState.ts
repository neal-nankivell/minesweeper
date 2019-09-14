import AppState from "./AppState";

const InitialState: AppState = {
  gamePhase: "Setup",
  gameConfiguration: {
    height: 8,
    width: 20,
    mines: 15
  },
  gameState: {
    flaggedPositions: [],
    minePositions: [],
    neighbourMineCounts: [],
    revealedPositions: []
  }
};

export default InitialState;
