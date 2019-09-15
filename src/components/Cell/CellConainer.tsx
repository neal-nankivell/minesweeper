import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import Cell from "./Cell";
import {
  CellStateProps,
  CellDispatchProps,
  CellContainerProps
} from "./CellProps";
import { revealCell, toggleCellFlag } from "../../actions/gameActions";

export const mapStateToProps = (
  state: AppState,
  ownProps: CellContainerProps
): CellStateProps => ({
  isRevealed:
    state.gameState.revealedPositions[ownProps.index] ||
    (state.gamePhase == "Lost" &&
      state.gameState.minePositions[ownProps.index]),
  isFlagged: state.gameState.flaggedPositions[ownProps.index],
  isMine: state.gameState.minePositions[ownProps.index],
  numberOfNeighbourMines: state.gameState.neighbourMineCounts[ownProps.index]
});

export const mapDispatchToProps = (
  dispatch: Dispatch<Action<any>>,
  ownProps: CellContainerProps
): CellDispatchProps => ({
  onClick: () => dispatch(revealCell(ownProps.index)),
  onContextMenu: () => dispatch(toggleCellFlag(ownProps.index))
});

export default connect<
  CellStateProps,
  CellDispatchProps,
  CellContainerProps,
  AppState
>(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
