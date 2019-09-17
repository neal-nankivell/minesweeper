import React from "react";
import HintButtonProps from "./HintButtonProps";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    }
  })
);

export const HintButton: React.FC<HintButtonProps> = (
  props: HintButtonProps
) => (
  <Button
    className={useStyles().button}
    onClick={props.hint}
    disabled={props.disabled}
  >
    Get Hint
  </Button>
);

export default HintButton;
