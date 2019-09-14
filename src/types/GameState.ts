export interface GameState {
  minePositions: boolean[];
  revealedPositions: boolean[];
  flaggedPositions: boolean[];
  neighbourMineCounts: number[];
}

export default GameState;
