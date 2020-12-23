import React from "react";
import { storiesOf } from "@storybook/react";
import HintButton from "./HintButton";
import { action } from "@storybook/addon-actions";
import HintButtonContainer from "./HintButtonContainer";
import withRedux from "../../stories/withRedux";

storiesOf("Components/Hint Button", module)
  .addDecorator(withRedux)
  .add("Basic States", () => (
    <>
      <p>Enabled:</p>
      <HintButton hint={action("Hint Button Clicked!")} disabled={false} />
      <p>Disabled:</p>
      <HintButton hint={action("Hint Button Clicked!")} disabled={true} />
    </>
  ))
  .add("Redux Container", () => <HintButtonContainer />);
