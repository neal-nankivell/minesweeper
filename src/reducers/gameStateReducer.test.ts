import gameStateReducer from "./gameStateReducer";
import { startGame } from "../actions/gameActions";
import InitialState from "../types/InitialState";

describe("gameStateReducer", () => {
  it("initalizes board on game start action", () => {
    let sut = gameStateReducer;
    let initialState = InitialState;
    let config = initialState.gameConfiguration;
    let result = sut(initialState, startGame()).gameState;

    expect(result.flaggedPositions).toEqual(
      Array(config.height * config.width).fill(false)
    );

    expect(result.minePositions.filter(v => v).length).toEqual(config.mines);
  });
});
