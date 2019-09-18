import React from "react";
import { storiesOf } from "@storybook/react";
import { ConfigurationEditor } from "./ConfigurationEditor";
import { number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ConfigurationEditorContainer from "./ConfigurationEditorContainer";
import { Typography, Container, Paper } from "@material-ui/core";

storiesOf("Components/Configuration Editor", module)
  .add("Basic States", () => {
    return (
      <ConfigurationEditor
        height={number("Height", 10, undefined, "Props")}
        width={number("Width", 10, undefined, "Props")}
        mineCount={number("Mine Count", 10, undefined, "Props")}
        updateConfiguration={action("update Configuration")}
        disabled={boolean("Disabled", false, "Props")}
      />
    );
  })
  .add("Redux Container", () => (
    <>
      <ConfigurationEditorContainer />
      <Container maxWidth="sm">
        <Paper style={{ padding: "2em", margin: "2em" }}>
          <Typography variant="subtitle1" gutterBottom>
            Notes:
          </Typography>
          <Typography variant="body1" gutterBottom>
            The above component will reflect updates to the configuration from
            the knobs below.
          </Typography>
          <Typography variant="body1" gutterBottom>
            But the knobs configuration does not render updates to state changes
            in the store caused by this component.
          </Typography>
          <Typography variant="body1" gutterBottom>
            To enable editing the Game Phase will need to be set to Setup.
          </Typography>
        </Paper>
      </Container>
    </>
  ));
