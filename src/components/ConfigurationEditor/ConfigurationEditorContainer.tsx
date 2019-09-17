import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { ConfigurationEditor } from "./ConfigurationEditor";
import { configureGame } from "../../actions/gameActions";

export const mapStateToProps = (state: AppState) => ({
  height: state.gameConfiguration.height,
  width: state.gameConfiguration.width,
  mineCount: state.gameConfiguration.mines,
  disabled: state.gamePhase !== "Setup"
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  updateConfiguration: (height: number, width: number, mineCount: number) =>
    dispatch(configureGame({ height, width, mineCount }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationEditor);
