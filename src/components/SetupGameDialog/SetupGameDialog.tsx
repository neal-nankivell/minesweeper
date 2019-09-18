import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";
import ConfigurationEditorContainer from "../ConfigurationEditor/ConfigurationEditorContainer";
import StartGameButtonContainer from "../StartGameButton/StartGameButtonContainer";
import SetupGameModalDialog from "./SetupGameDialogProps";

const SetupGameDialog: React.FC<SetupGameModalDialog> = props => {
  return (
    <Dialog aria-labelledby="simple-dialog-title" open={props.isOpen}>
      <DialogTitle id="simple-dialog-title">Setup Game</DialogTitle>
      <ConfigurationEditorContainer />
      <StartGameButtonContainer />
    </Dialog>
  );
};

export default SetupGameDialog;
