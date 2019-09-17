import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { startGame } from "../../actions/gameActions";
import StartGameButton from "./StartGameButton";

export const mapStateToProps = (state: AppState) => ({});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  startGame: () => dispatch(startGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartGameButton);
