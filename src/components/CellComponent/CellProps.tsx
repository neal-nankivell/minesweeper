export interface CellOwnProps {}

export interface CellContainerProps extends CellOwnProps {
  index: number;
}

export interface CellStateProps {
  isRevealed: boolean;
  isFlagged: boolean;
  isMine: boolean;
  numberOfNeighbourMines: number;
}

export interface CellDispatchProps {
  onClick: () => void;
  onContextMenu: () => void;
}

type CellProps = CellOwnProps & CellStateProps & CellDispatchProps;

export default CellProps;
