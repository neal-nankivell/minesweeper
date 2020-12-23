import React from "react";
import { storiesOf } from "@storybook/react";
import SetupGameDialogContainer from "./SetupGameDialogContainer";
import { Typography } from "@material-ui/core";
import withRedux from "../../stories/withRedux";

storiesOf("Components/Setup Game Dialog", module)
  .addDecorator(withRedux)
  .add("Redux Container", () => (
    <>
      <SetupGameDialogContainer />{" "}
      <Typography variant="body1" gutterBottom>
        Using the Knobs tab please set the GamePhase to 'Setup'.
      </Typography>
    </>
  ));
