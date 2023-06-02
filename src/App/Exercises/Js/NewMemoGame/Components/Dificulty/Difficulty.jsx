export const Difficulty = ({ difficulty, setDifficulty }) => {
  return (
    <>
      <p>
        Current difficulty {difficulty}x{difficulty} grid
      </p>
      <p>Select on of the difficulties:</p>
      <div className="buttons-wrapper">
        <button className="diff-button" onClick={() => setDifficulty(2)}>
          2
        </button>
        <button className="diff-button" onClick={() => setDifficulty(4)}>
          4
        </button>
        <button className="diff-button" onClick={() => setDifficulty(6)}>
          6
        </button>
      </div>
    </>
  );
};
