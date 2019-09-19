import React from "react";
import ConfigurationEditorProps from "./ConfigurationEditorProps";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Slider, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  })
);

export const ConfigurationEditor: React.FC<
  ConfigurationEditorProps
> = props => {
  const classes = useStyles();
  return (
    <form className={classes.container}>
      <TextField
        className={classes.textField}
        label="height"
        disabled={props.disabled}
        onBlur={e =>
          props.updateConfiguration(
            Number(e.target.value),
            props.width,
            props.mineCount
          )
        }
        defaultValue={props.height}
        type="number"
      />

      <TextField
        className={classes.textField}
        label="Width"
        disabled={props.disabled}
        onBlur={e =>
          props.updateConfiguration(
            props.height,
            Number(e.target.value),
            props.mineCount
          )
        }
        defaultValue={props.width}
        type="number"
      />

      <TextField
        className={classes.textField}
        label="Mines"
        disabled={props.disabled}
        onBlur={e =>
          props.updateConfiguration(
            props.height,
            props.width,
            Number(e.target.value)
          )
        }
        defaultValue={props.mineCount}
        type="number"
      />
    </form>
  );
};
