import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ThemeSwitch from "./ThemeSwitch";
import ThemeSwitchContainer from "./ThemeSwitchContainer";
import withRedux from "../../stories/withRedux";

storiesOf("Components/Theme Switch", module)
  .addDecorator(withRedux)
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
