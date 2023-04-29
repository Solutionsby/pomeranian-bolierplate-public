import './stylesTwoInput.css';
import { useState } from 'react';

export const TwoInput = () => {
  const [numberOne, setnumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [message, setMessage] = useState('');

  const GetFirstNumber = (e) => {
    setnumberOne(e.target.value);
  };
  const GetSecondNumber = (e) => {
    setNumberTwo(e.target.value);
  };
  const ResetClick = () => {
    setnumberOne('');
    setNumberTwo('');
  };
  const HandelClik = () => {
    if (Number(numberOne) > Number(numberTwo)) {
      setMessage(
        `Liczba A - ${numberOne} jest większa niż liczba B - ${numberTwo}`
      );
    } else if (Number(numberOne) === Number(numberTwo)) {
      setMessage(`Liczba A - ${numberOne} jest równa liczbie B - ${numberTwo}`);
    } else {
      setMessage(
        `Liczba A - ${numberOne} jest mniejsza niż liczba B - ${numberTwo}`
      );
    }
  };

  return (
    <div className="wrapper">
      <h1>Czy A jest wieksze od B ?</h1>
      <form>
        <label>
          <p>Podaj Liczbę A:</p>
          <input
            type="number"
            name="name"
            placeholder="A"
            value={numberOne}
            onChange={GetFirstNumber}
          />
          <p>Podaj Liczbę B:</p>
          <input
            type="number"
            name="name"
            placeholder="B"
            value={numberTwo}
            onChange={GetSecondNumber}
          />
          <p>{message}</p>
        </label>
      </form>
      <button className="CheckButton" onClick={HandelClik}>
        Sprawdź
      </button>
      <button className="ResetButton" onClick={ResetClick}>
        Reset
      </button>
    </div>
  );
};
