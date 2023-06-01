import { Cell } from './Cell';

export const MemoBoard = ({ board }) => {
  return board.map((X, xindex) => (
    <div key={`X-${xindex}`} className="X">
      {X.map((Y, yindex) => (
        <Cell
          key={`Y-${yindex}`}
          value={Y.value}
          clicked={Y.clicked}
          // handleClick={handleClick}
        />
      ))}
    </div>
  ));
};
