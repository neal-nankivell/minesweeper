import React from "react";
import HintButtonProps from "./HintButtonProps";

export const HintButton: React.FC<HintButtonProps> = (
  props: HintButtonProps
) => (
  <button onClick={props.hint} disabled={props.disabled}>
    Get Hint
  </button>
);

export default HintButton;
