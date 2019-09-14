import "./CellGrid.css";
import React from "react";
import CellContainer from "../CellComponent/CellConainer";

interface CellGridProps {
  height: number;
  width: number;
}

class CellGrid extends React.PureComponent<CellGridProps> {
  render() {
    const rows = [];
    for (let i = 0; i < this.props.height; i++) {
      const row = [];
      for (let j = 0; j < this.props.width; j++) {
        row.push(
          <CellContainer
            key={i * this.props.width + j}
            index={i * this.props.width + j}
          />
        );
      }
      rows.push(
        <div key={i} className="grid-row">
          {row}
        </div>
      );
    }
    return <div>{rows}</div>;
  }
}

export default CellGrid;
