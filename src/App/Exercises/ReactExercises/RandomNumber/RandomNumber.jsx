import './styles.css';
import { useState } from 'react';

export const RandomNumber = () => {
  const [numberOne, setnumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [message, setMessage] = useState('');

  const GetFirstNumber = (e) => {
    setnumberOne(e.target.value);
  };

  const ResetClick = () => {
    setnumberOne('');
    setNumberTwo('');
  };
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const RandomClick = () => {
    setNumberTwo(randomNumberInRange(1, 100));
  };

  const HandelClik = () => {
    if (Number(numberOne) > Number(numberTwo)) {
      setMessage(`Jestem Mniejsza`);
    } else if (Number(numberOne) === Number(numberTwo)) {
      setMessage(`Gratulacje Trafiłaś/eś !`);
    } else {
      setMessage(`Jestem Większa`);
    }
  };

  return (
    <div className="wrapper">
      <h1>Gra Zgadywanka</h1>
      <form>
        <label>
          <p>Jaką Jestem Liczbą ( Zakres od 1 - 100)</p>
          <input
            type="number"
            name="name"
            placeholder="A"
            value={numberOne}
            onChange={GetFirstNumber}
          />
          <p>{message}</p>
        </label>
      </form>
      <button className="RandomButton" onClick={RandomClick}>
        Wylosuj liczbę
      </button>
      <button className="CheckButton" onClick={HandelClik}>
        Sprawdź
      </button>
      <button className="ResetButton" onClick={ResetClick}>
        Reset
      </button>
    </div>
  );
};
