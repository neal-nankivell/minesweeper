import AppState from "../../types/AppState";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { toggleTheme } from "../../actions/gameActions";
import ThemeSwitch from "./ThemeSwitch";

export const mapStateToProps = (state: AppState) => ({
  darkThemeOn: state.theme === "dark"
});

export const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitch);
