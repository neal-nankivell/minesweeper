import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StartGameButton from "./StartGameButton";

storiesOf("Start Game Button", module).add("Base State", () => {
  return <StartGameButton startGame={action("Start Game Button Clicked!")} />;
});
