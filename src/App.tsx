import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import AppBody from "./components/AppBody/AppBody";
import ThemeContainer from "./components/ThemeContainer/ThemeContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeContainer>
        <AppToolbar />
        <AppBody />
      </ThemeContainer>
    </Provider>
  );
};

export default App;
