import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { restartGame } from "../../actions/gameActions";
import RestartGameButton from "./RestartGameButton";

export const mapStateToProps = (state: AppState) => ({
  disabled: state.gamePhase === "Setup"
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  restartGame: () => dispatch(restartGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestartGameButton);
