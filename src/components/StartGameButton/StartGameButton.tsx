import React from "react";
import StartGameButtonProps from "./StartGameButtonProps";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    }
  })
);

export const StartGameButton: React.FC<StartGameButtonProps> = (
  props: StartGameButtonProps
) => (
  <Button
    className={useStyles().button}
    onClick={props.startGame}
    disabled={props.disabled}
  >
    Start Game!
  </Button>
);

export default StartGameButton;
