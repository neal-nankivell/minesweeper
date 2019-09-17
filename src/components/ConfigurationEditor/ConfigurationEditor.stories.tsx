import React from "react";
import { storiesOf } from "@storybook/react";
import { ConfigurationEditor } from "./ConfigurationEditor";
import { number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ConfigurationEditorContainer from "./ConfigurationEditorContainer";

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
      <hr />
      <h4>Notes:</h4>
      <p>
        The above component will reflect updates to the configuration from the
        knobs below.
      </p>
      <p>
        But the knobs configuration does not render updates to state changes in
        the store caused by this component.
      </p>
    </>
  ));
