import React from "react";
import ConfigurationEditorProps from "./ConfigurationEditorProps";

export const ConfigurationEditor: React.FC<
  ConfigurationEditorProps
> = props => (
  <form key="config-form">
    <fieldset>
      <legend>Configurtation:</legend>
      <label htmlFor="height">Height</label>
      <input
        disabled={props.disabled}
        name="height"
        onChange={e =>
          props.updateConfiguration(
            e.target.valueAsNumber,
            props.width,
            props.mineCount
          )
        }
        value={props.height}
        type="number"
      />

      <label htmlFor="width">Width</label>
      <input
        name="width"
        disabled={props.disabled}
        onChange={e =>
          props.updateConfiguration(
            props.height,
            e.target.valueAsNumber,
            props.mineCount
          )
        }
        value={props.width}
        type="number"
      />

      <label htmlFor="mines">Mines</label>
      <input
        name="mines"
        disabled={props.disabled}
        onChange={e =>
          props.updateConfiguration(
            props.height,
            props.width,
            e.target.valueAsNumber
          )
        }
        value={props.mineCount}
        type="number"
      />
    </fieldset>
  </form>
);
