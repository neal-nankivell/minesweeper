import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ThemeSwitch from "./ThemeSwitch";
import ThemeSwitchContainer from "./ThemeSwitchContainer";

storiesOf("Components/Theme Switch", module)
  .add("Basic States", () => (
    <>
      <p>
        <ThemeSwitch toggleTheme={() => action("Toggle")} darkThemeOn={true} />
      </p>
      <p>
        <ThemeSwitch toggleTheme={() => action("Toggle")} darkThemeOn={false} />
      </p>
    </>
  ))
  .add("Redux Container", () => <ThemeSwitchContainer />);
