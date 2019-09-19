import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import AppBody from "./components/AppBody/AppBody";
import { Container } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppToolbar />
      <Container component="main" maxWidth="sm">
        <AppBody />
      </Container>
    </Provider>
  );
};

export default App;
