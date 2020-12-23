import React from "react";
import { storiesOf } from "@storybook/react";
import RestartGameButton from "./RestartGameButton";
import { action } from "@storybook/addon-actions";
import RestartGameButtonContainer from "./RestartGameButtonContainer";
import { Typography } from "@material-ui/core";
import withRedux from "../../stories/withRedux";

storiesOf("Components/Restart Game Button", module)
  .addDecorator(withRedux)
  .add("Basic States", () => (
    <>
      <Typography variant={"subtitle1"}>Enabled:</Typography>
      <RestartGameButton
        restartGame={action("Restart Game!")}
        disabled={false}
      />

      <Typography variant={"subtitle1"}>Disabled:</Typography>
      <RestartGameButton
        restartGame={action("Restart Game!")}
        disabled={true}
      />
    </>
  ))
  .add("Redux Container", () => <RestartGameButtonContainer />);
