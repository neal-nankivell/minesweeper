import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { CellGridProps } from "./CellGridProps";
import CellGrid from "./CellGrid";

export const mapStateToProps = (state: AppState): CellGridProps => ({
  height: state.gameConfiguration.height,
  width: state.gameConfiguration.width
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellGrid);
