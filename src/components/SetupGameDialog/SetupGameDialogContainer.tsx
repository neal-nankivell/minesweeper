import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import SetupGameDialog from "./SetupGameDialog";
import SetupGameDialogProps from "./SetupGameDialogProps";

export const mapStateToProps = (state: AppState): SetupGameDialogProps => ({
  isOpen: state.gamePhase === "Setup"
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupGameDialog);
