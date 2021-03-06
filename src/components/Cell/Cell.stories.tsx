import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, number } from "@storybook/addon-knobs";
import Cell from "./Cell";
import { action } from "@storybook/addon-actions";
import CellConainer from "./CellConainer";
import withRedux from "../../stories/withRedux";

storiesOf("Components/Cell", module)
  .addDecorator(withRedux)
  .add("Basic states", () => (
    <>
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={false}
        numberOfNeighbourMines={0}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={true}
        isMine={false}
        isRevealed={false}
        numberOfNeighbourMines={0}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={true}
        isRevealed={true}
        numberOfNeighbourMines={0}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={true}
        numberOfNeighbourMines={0}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={true}
        numberOfNeighbourMines={1}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={true}
        numberOfNeighbourMines={2}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={true}
        numberOfNeighbourMines={3}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={true}
        numberOfNeighbourMines={4}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={true}
        numberOfNeighbourMines={5}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={true}
        numberOfNeighbourMines={6}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={true}
        numberOfNeighbourMines={7}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
      <Cell
        isFlagged={false}
        isMine={false}
        isRevealed={true}
        numberOfNeighbourMines={8}
        onClick={action("onClick")}
        onContextMenu={action("onContextMenu")}
      />
    </>
  ))
  .add("Configurable", () => (
    <Cell
      isFlagged={boolean("isFlagged", false, "props")}
      isMine={boolean("isMine", false, "props")}
      isRevealed={boolean("isRevealed", false, "props")}
      numberOfNeighbourMines={number(
        "numberOfNeighbourMines",
        5,
        {
          min: 0,
          max: 8,
          range: false,
          step: 1,
        },
        "props"
      )}
      onClick={action("onClick")}
      onContextMenu={action("onContextMenu")}
    />
  ))
  .add("Redux Container", () => {
    let cells = [];
    for (let i = 0; i < 10; i++) {
      cells.push(<CellConainer index={i} />);
    }
    return (
      <>
        <p>First 10 Cells:</p> {cells}
      </>
    );
  });
