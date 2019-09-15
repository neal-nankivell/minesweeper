import InitialState from "../types/InitialState";
import {
  GameAction,
  startGame,
  revealCell,
  toggleCellFlag,
  restartGame,
  hint
} from "../actions/gameActions";
import { getType } from "typesafe-actions";
import AppState from "../types/AppState";

const initialState: AppState = InitialState;

const applyStartGame = (state: AppState): AppState => {
  const config = state.gameConfiguration;
  const size = config.height * config.width;

  let minesPositions = Array(size).fill(false);
  let neighbourMineCounts: number[] = Array(size).fill(0);

  let choosenPositions = new Set<number>();
  for (let i = 0; i < config.mines; i++) {
    let position = Math.floor(Math.random() * size);
    while (choosenPositions.has(position)) {
      position = Math.floor(Math.random() * size);
    }
    choosenPositions.add(position);
    minesPositions[position] = true;

    const incrementAbove = position % config.width !== position;
    const incrementBelow = position + config.width < size;
    const incrementLeft = position % config.width !== 0;
    const incrementRight = position % config.width !== config.width - 1;

    if (incrementAbove) {
      neighbourMineCounts[position - config.width]++;
      if (incrementLeft) {
        neighbourMineCounts[position - config.width - 1]++;
      }
      if (incrementRight) {
        neighbourMineCounts[position - config.width + 1]++;
      }
    }
    if (incrementBelow) {
      neighbourMineCounts[position + config.width]++;
      if (incrementLeft) {
        neighbourMineCounts[position + config.width - 1]++;
      }
      if (incrementRight) {
        neighbourMineCounts[position + config.width + 1]++;
      }
    }
    if (incrementRight) {
      neighbourMineCounts[position + 1]++;
    }

    if (incrementLeft) {
      neighbourMineCounts[position - 1]++;
    }
  }

  return {
    ...state,
    gameState: {
      flaggedPositions: Array(size).fill(false),
      revealedPositions: Array(size).fill(false),
      minePositions: minesPositions,
      neighbourMineCounts: neighbourMineCounts
    }
  };
};

const applyRevealCell = (
  state: AppState,
  action: ReturnType<typeof revealCell>
): AppState => {
  if (
    state.gamePhase !== "InProgress" ||
    state.gameState.flaggedPositions[action.payload.cell]
  ) {
    return state;
  }
  if (state.gameState.minePositions[action.payload.cell]) {
    return {
      ...state,
      gamePhase: "Lost"
    };
  }

  var revealedPositions = state.gameState.revealedPositions.slice();
  revealedPositions[action.payload.cell] = true;
  var positionsToReveal = [action.payload.cell];
  var indexToCheck = positionsToReveal.pop();

  while (indexToCheck !== undefined) {
    revealedPositions[indexToCheck] = true;
    if (state.gameState.neighbourMineCounts[indexToCheck] === 0) {
      var adjcent = getAdjucentIndexPositions(
        indexToCheck,
        state.gameConfiguration.height,
        state.gameConfiguration.width
      ).filter(v => !revealedPositions[v] && !positionsToReveal.includes(v));
      positionsToReveal.push(...adjcent);
    }

    indexToCheck = positionsToReveal.pop();
  }

  let won =
    revealedPositions.filter(v => v).length ===
    state.gameConfiguration.height * state.gameConfiguration.width -
      state.gameConfiguration.mines;

  return {
    ...state,
    gameState: {
      ...state.gameState,
      revealedPositions: revealedPositions
    },
    gamePhase: won ? "Won" : "InProgress"
  };
};

const applyToggleCellFlag = (
  state: AppState,
  action: ReturnType<typeof toggleCellFlag>
): AppState => {
  if (state.gamePhase !== "InProgress") {
    return state;
  }
  var flags = state.gameState.flaggedPositions.slice();

  flags[action.payload.cell] = !flags[action.payload.cell];
  return {
    ...state,
    gameState: {
      ...state.gameState,
      flaggedPositions: flags
    }
  };
};

const applyHint = (state: AppState): AppState => {
  var revealedPositions = state.gameState.revealedPositions.slice();
  for (let i = 0; i < revealedPositions.length; i++) {
    if (!revealedPositions[i] && !state.gameState.minePositions[i]) {
      revealedPositions[i] = true;
      break;
    }
  }
  return {
    ...state,
    gameState: {
      ...state.gameState,
      revealedPositions: revealedPositions
    }
  };
};

const getAdjucentIndexPositions = (
  index: number,
  height: number,
  width: number
): number[] => {
  const validAbove = index % width !== index;
  const validBeow = index + width < height * width;
  const validLeft = index % width !== 0;
  const validRight = index % width !== width - 1;
  let result = [];
  if (validAbove) {
    result.push(index - width);
  }
  if (validBeow) {
    result.push(index + width);
  }
  if (validLeft) {
    result.push(index - 1);
  }
  if (validRight) {
    result.push(index + 1);
  }
  return result;
};

export default function gameStateReducer(
  state: AppState = initialState,
  action: GameAction
) {
  switch (action.type) {
    case getType(restartGame):
    case getType(startGame):
      return applyStartGame(state);
    case getType(revealCell):
      return applyRevealCell(state, action);
    case getType(toggleCellFlag):
      return applyToggleCellFlag(state, action);
    case getType(hint):
      return applyHint(state);
    default:
      return state;
  }
}
