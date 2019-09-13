export interface GameState {
  minesPositions: boolean[];
  revealedPositions: boolean[];
  flaggedPositions: boolean[];
  neighbourMineCounts: number[];
}

export default GameState;
