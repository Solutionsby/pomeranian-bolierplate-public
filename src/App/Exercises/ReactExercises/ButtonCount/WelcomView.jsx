import { useState } from 'react';
import './styles.css';

export const WelcomeView = () => {
  const [inputValue, setInput] = useState('');

  function GettingInputValue(param) {
    setInput(param.target.value);
  }

  const [charactersInput, setCharactersInput] = useState(0);
  function buttonClicked() {
    setCharactersInput(inputValue.length);
  }

  return (
    <div className="wrapper">
      <h1>Cześć</h1>
      <div>wartosc inputa: {inputValue}</div>
      <div>ilosc liter: {charactersInput}</div>
      <form>
        <label>
          <p>Wpisz Tekst</p>
          <input
            type="text"
            placeholder="Wpisz Tekst"
            onChange={(e) => GettingInputValue(e)}
          />
        </label>
      </form>
      <button className="someBtn" onClick={() => buttonClicked()}>
        Przycisk klikniety razy
      </button>
      <div className="placeHolder"></div>
    </div>
  );
};
