import { useState } from 'react';
import './styles.css';

export const ButtonCheckInput = () => {
  const [param, setParam] = useState(0);
  const [message, setMessage] = useState(param);

  const takeNumber = (e) => {
    setParam(e.target.value);
  };
  const handleClick = () => {
    setMessage(param);
    setParam('');
  };

  return (
    <div className="wrapper">
      <h1>Czy A jest większe od 10 </h1>
      <form>
        <label>
          Podaj Cyfrę
          <input
            type="text"
            name="name"
            value={param}
            placeholder="A"
            onChange={takeNumber}
          />
        </label>
      </form>
      <p>
        Twoja Liczba to {message} Liczba ta jest{' '}
        {message <= 10 ? 'jest Mniejsza' : 'jest wieksza bądź równa 10'}
      </p>
      <button className="someBtn" onClick={handleClick}>
        Porównaj Cyfry
      </button>
    </div>
  );
};
