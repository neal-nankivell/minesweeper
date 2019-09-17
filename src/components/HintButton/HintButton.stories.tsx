import React from "react";
import { storiesOf } from "@storybook/react";
import HintButton from "./HintButton";
import { action } from "@storybook/addon-actions";

storiesOf("Hint Button", module).add("Base State", () => {
  return <HintButton hint={action("Hint Button Clicked!")} />;
});
