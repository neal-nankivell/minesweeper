import AppState from "./AppState";

const InitialState: AppState = {
  gamePhase: "Setup",
  gameConfiguration: {
    height: 10,
    width: 10,
    mines: 15
  },
  gameState: {
    flaggedPositions: [],
    minePositions: [],
    neighbourMineCounts: [],
    revealedPositions: []
  },
  theme: "light"
};

export default InitialState;
