import InitialState from "../types/InitialState";
import {
  GameAction,
  startGame,
  revealCell,
  toggleCellFlag
} from "../actions/gameActions";
import { getType } from "typesafe-actions";
import AppState from "../types/AppState";

const initialState: AppState = InitialState;

const applyStartGame = (
  state: AppState,
  action: ReturnType<typeof startGame>
): AppState => {
  const config = state.gameConfiguration;
  const size = config.height * config.width;

  let minesPositions = Array(size).fill(false);
  let neighbourMineCounts = Array(size).fill(0);

  let choosenPositions = new Set<number>();
  for (let i = 0; i < config.mines; i++) {
    let position = Math.floor(Math.random() * size);
    while (choosenPositions.has(position)) {
      position = Math.floor(Math.random() * size);
    }
    choosenPositions.add(position);
    minesPositions[position] = true;

    const incrementAbove = position % config.width != position;
    const incrementBelow = position + config.width < size;
    const incrementLeft = position % config.width != 0;
    const incrementRight = position % config.width != config.width - 1;

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
  if (state.gamePhase != "InProgress") {
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
  //   var positionsToReveal = [action.payload.cell];
  //   var indexToCheck = positionsToReveal.pop();
  //   while (indexToCheck) {
  //     revealedPositions[indexToCheck] = true;
  //     for (let otherPosition in getAdjucentIndexPositions(
  //       indexToCheck,
  //       state.gameConfiguration.height,
  //       state.gameConfiguration.width
  //     )) {
  //         if (!state.gameState.revealedPositions[indexToCheck]) {
  //             if
  //         }
  //     }
  //     indexToCheck = positionsToReveal.pop();
  //   }
  return {
    ...state,
    gameState: {
      ...state.gameState,
      revealedPositions: revealedPositions
    }
  };
};

const applyToggleCellFlag = (
  state: AppState,
  action: ReturnType<typeof toggleCellFlag>
): AppState => {
  if (state.gamePhase != "InProgress") {
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

function* getAdjucentIndexPositions(
  index: number,
  height: number,
  width: number
) {
  const validAbove = index % width != index;
  const validBeow = index + width < height * width;
  const validLeft = index % width != 0;
  const validRight = index % width != width - 1;
  if (validAbove) {
    yield index - width;
  }
  if (validBeow) {
    yield index + width;
  }
  if (validLeft) {
    yield index - 1;
  }
  if (validRight) {
    yield index + 1;
  }
}

export default function gameStateReducer(
  state: AppState = initialState,
  action: GameAction
) {
  switch (action.type) {
    case getType(startGame):
      return applyStartGame(state, action);
    case getType(revealCell):
      return applyRevealCell(state, action);
    case getType(toggleCellFlag):
      return applyToggleCellFlag(state, action);
    default:
      return state;
  }
}
