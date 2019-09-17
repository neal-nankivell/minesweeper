import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import MineCount from "./MineCount";

export const mapStateToProps = (state: AppState) => ({
  mineCount:
    state.gameConfiguration.mines -
    state.gameState.flaggedPositions.filter(f => f).length
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MineCount);
