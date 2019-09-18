import React from "react";
import { storiesOf } from "@storybook/react";
import RestartGameButton from "./RestartGameButton";
import { action } from "@storybook/addon-actions";

storiesOf("Components/Restart Game Button", module).add("Basic States", () => (
  <RestartGameButton restartGame={action("Restart Game!")} />
));
