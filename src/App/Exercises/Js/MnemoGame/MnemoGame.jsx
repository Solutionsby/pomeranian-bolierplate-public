import React, { useEffect, useState } from 'react';
import { rand } from './Components/RandFunction';
import { MemoBoard } from './Components/MemoBoard';
import './styles.css';
import { Difficulty } from './Components/Difficulty';
import { Timer } from './Components/Timmer';

import db from './db.json';

export const MnemoGame = () => {
  const [difficulty, setDifficulty] = useState(2);

  const [board, setBoard] = useState(
    new Array(2).fill(
      new Array(2).fill({
        value: '',
        clicked: false,
        isTurned: false,
        id: '',
      })
    )
  );

  const getRandomizeName = () => {};

  const handleClick = (id) => {
    console.log(id);

    // TODO: Get element and change it's clicked value
  };

  useEffect(() => {
    setBoard(
      new Array(difficulty).fill(
        new Array(difficulty).fill({
          value: '',
          clicked: false,
          isTurned: false,
          id: '',
        })
      )
    );
  }, [difficulty]);

  return (
    <>
      <Timer />
      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
      <div
        className="wrapper-x"
        style={{ gridTemplateColumns: `repeat(${board.length}, 1fr)` }}
      >
        <MemoBoard board={board} />
      </div>
    </>
  );
};
