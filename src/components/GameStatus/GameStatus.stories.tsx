import React from "react";
import { storiesOf } from "@storybook/react";
import GameStatus from "./GameStatus";
import GameStatusContainer from "./GameStatusContainer";

storiesOf("Components/Game Status", module)
  .add("Basic States", () => {
    return (
      <>
        Setup: <GameStatus gamePhase="Setup" />
        In Progress: <GameStatus gamePhase="InProgress" />
        Won: <GameStatus gamePhase="Won" />
        Lost: <GameStatus gamePhase="Lost" />
      </>
    );
  })
  .add("Redux Container", () => <GameStatusContainer />);
