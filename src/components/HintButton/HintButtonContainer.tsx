import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { hint } from "../../actions/gameActions";
import HintButton from "./HintButton";

export const mapStateToProps = (state: AppState) => ({});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  hint: () => dispatch(hint())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HintButton);
