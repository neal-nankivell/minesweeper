import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

export const mapStateToProps = (state: AppState) => ({
  theme: createMuiTheme({
    palette: {
      type: state.theme
    }
  })
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeProvider);
