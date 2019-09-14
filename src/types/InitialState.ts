import AppState from "./AppState";

const InitialState: AppState = {
  gamePhase: "Setup",
  gameConfiguration: {
    height: 8,
    width: 8,
    mines: 10
  },
  gameState: {
    flaggedPositions: [],
    minePositions: [],
    neighbourMineCounts: [],
    revealedPositions: []
  }
};

export default InitialState;
