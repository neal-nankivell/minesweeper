import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

export interface ThemeSwitchProps {
  darkThemeOn: boolean;
  toggleTheme: () => void;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = props => {
  return (
    <FormControlLabel
      control={
        <Switch checked={props.darkThemeOn} onChange={props.toggleTheme} />
      }
      label="Dark Theme"
    />
  );
};

export default ThemeSwitch;
