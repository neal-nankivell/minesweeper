import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StartGameButton from "./StartGameButton";
import StartGameButtonContainer from "./StartGameButtonContainer";

storiesOf("Components/Start Game Button", module)
  .add("Basic States", () => (
    <>
      <p>Enabled:</p>
      <StartGameButton
        startGame={action("Start Game Button Clicked!")}
        disabled={false}
      />
      <p>Disabled:</p>
      <StartGameButton
        startGame={action("Start Game Button Clicked!")}
        disabled={true}
      />
    </>
  ))
  .add("Redux Container", () => <StartGameButtonContainer />);
