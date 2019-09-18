import React from "react";
import { storiesOf } from "@storybook/react";
import SetupGameDialogContainer from "./SetupGameDialogContainer";
import { Typography } from "@material-ui/core";

storiesOf("Components/SetupGameDialog", module).add("Redux Container", () => (
  <>
    <SetupGameDialogContainer />{" "}
    <Typography variant="body1" gutterBottom>
      Using the Knobs tab please set the GamePhase to 'Setup'.
    </Typography>
  </>
));
