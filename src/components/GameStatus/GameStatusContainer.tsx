import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import GameStatus from "./GameStatus";

export const mapStateToProps = (state: AppState) => ({
  gamePhase: state.gamePhase
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStatus);
