import AppState from "./AppState";

const InitialState: AppState = {
  gamePhase: "Setup",
  gameConfiguration: {
    height: 15,
    width: 20,
    mines: 55
  },
  gameState: {
    flaggedPositions: [],
    minePositions: [],
    neighbourMineCounts: [],
    revealedPositions: []
  }
};

export default InitialState;
