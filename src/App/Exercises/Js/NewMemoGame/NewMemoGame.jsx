import './styles.css';
import db from './list/db.json';
import classnames from 'classnames';
import { useEffect, useState, useRef } from 'react';
import { Difficulty } from './Components/Dificulty/Difficulty';
import { Timer } from './Components/Timmer/Timmer';
import { Card } from './Components/Card/Card';
import {
  checkIstwo,
  checkIsFour,
  checkIsSix,
} from './Components/BoardCheckers/BoardCheckers';
import { rand, CutANames } from './Components/ArrayActions/ArrayActions';

export const NewMemoGame = () => {
  const [difficulty, setDifficulty] = useState(2);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [clearedCards, setClearedCards] = useState({});
  const [openCards, setOpenCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [moves, setMoves] = useState(0);
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };
  const NewNameArray = CutANames(db.names, difficulty);

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === NewNameArray.length) {
      setShowModal(true);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (card[first] === card[second]) {
      setClearedCards((prev) => ({ ...prev, [card[first]]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = rand(0, (difficulty * difficulty) / 2 - 1);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }
  const [card, setCards] = useState(
    shuffleCards.bind(null, NewNameArray.concat(NewNameArray))
  );
  useEffect(() => {
    const NewNameArray = CutANames(db.names, difficulty);

    setCards(shuffleCards.bind(null, NewNameArray.concat(NewNameArray)));
  }, [difficulty]);

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card]);
  };
  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };
  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(NewNameArray.concat(NewNameArray)));
  };

  return (
    <>
      <Timer />
      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
      <div
        className={classnames('card-wrapper', {
          'board-two': checkIstwo(difficulty),
          'board-four': checkIsFour(difficulty),
          'board-six': checkIsSix(difficulty),
        })}
      >
        {card.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              difficulty={difficulty}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              isTwo={checkIstwo}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <div>{moves}</div>
      <button onClick={handleRestart}>test</button>
    </>
  );
};
