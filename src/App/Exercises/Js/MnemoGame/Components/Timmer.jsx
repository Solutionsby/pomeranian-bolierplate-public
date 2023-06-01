import { useState, useEffect } from 'react';

export const Timer = () => {
  // TODO: When timer hit 0 we should alert alert("Game over!")
  const MIN_TIMER_VAL = 0;
  // That's the amount we initially want to start the game with
  const [chosenTime, setChosenTime] = useState(3 * 1000);
  // That's the time left in game to finish it
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    setTimer(chosenTime);
  }, [chosenTime]);

  const changeTimer = (chosenTime) => {
    setChosenTime(chosenTime * 1000);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    if (gameStarted) {
      let timerInterval = setInterval(() => {
        setTimer((currentTimer) => {
          return currentTimer > MIN_TIMER_VAL
            ? currentTimer - 1000
            : currentTimer;
        });
      }, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [timer, gameStarted]);

  return (
    <>
      You've chosen to play for {chosenTime / 1000} seconds and you're left
      with: <span className="time-left">{timer / 1000} seconds</span>
      <div className="buttons-wrapper">
        <button className="diff-button" onClick={() => changeTimer(30)}>
          30
        </button>
        <button className="diff-button" onClick={() => changeTimer(60)}>
          60
        </button>
        <button className="diff-button" onClick={() => changeTimer(120)}>
          120
        </button>
      </div>
      <button className="diff-button" onClick={() => startGame()}>
        Start!
      </button>
    </>
  );
};
