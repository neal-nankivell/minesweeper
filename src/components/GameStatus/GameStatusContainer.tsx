import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import GameStatus from "./GameStatus";
import { startGame } from "../../actions/gameActions";

export const mapStateToProps = (state: AppState) => ({
  gamePhase: state.gamePhase,
  mines: state.gameState.minePositions.filter(v => v).length,
  flags: state.gameState.flaggedPositions.filter(v => v).length
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  restart: () => dispatch(startGame()),
  start: () => dispatch(startGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStatus);
