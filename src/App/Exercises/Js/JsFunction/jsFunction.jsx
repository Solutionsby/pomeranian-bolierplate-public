import { useState } from 'react';
import './styles.css';

export const JsFunction = () => {
  const users = [
    {
      name: 'Kamil',

      age: 33,

      sport: 'Basketball',
    },

    {
      name: 'Arek',

      age: 22,

      sport: 'Volleyball',
    },

    {
      name: 'Igor',

      age: 18,

      sport: 'Soccer',
    },

    {
      name: 'Aleksander',

      age: 25,
    },
  ];
  const obj = {
    name: 'dog',

    legs: 4,

    color: 'white',
  };

  const number = 10;
  const [numberInput, setNumberInput] = useState(10);
  const [message, setMessage] = useState('Wprowadź liczbę');

  const numberFromInput = (e) => {
    return setNumberInput(e.target.value);
  };

  function checkNumberFunction(param1) {
    const messegeText = param1 < 50;
    return messegeText;
  }

  function checkNumberFromInput() {
    const checkNumber = Number(numberInput) < 50;
    setMessage(
      `Liczba ${numberInput} ${
        checkNumber ? ' Liczba Jest Mniejsza' : ' Liczba jest Większa'
      }`
    );
  }
  function checkUser(object, name) {
    const foundName = object.find((element) => element.name === name);
    const messegeSport = foundName.sport
      ? `${foundName.name} Trenuje ${foundName.sport}`
      : `${foundName.name} Ten zawodnik nie uprawia sportu`;
    return messegeSport;
  }
  function checkUsers(object, name, param, placeHolder = 'Nie trenuje') {
    return (
      object.find((element) => element.name === name)[param] || placeHolder
    );
  }

  function animal({ name, legs }) {
    return `This ${name} have ${legs} legs `;
  }

  function addTwoNumbers(num1, num2) {
    if (num2 < 50) {
      return Number(num2) + num1;
    } else {
      return num2;
    }
  }

  return (
    <div>
      <p>{addTwoNumbers(51, '49')}</p>
      <p>---------------------------</p>
      <p>
        {`Liczba ${number}  ${
          checkNumberFunction(number)
            ? 'jest mniejsze od 50'
            : 'jest wieksze od 50'
        }`}
      </p>
      <p>---------------------------</p>
      <input type="number" onChange={numberFromInput} />
      <button onClick={checkNumberFromInput}>Sprawdź</button>
      <p>{message}</p>
      <p>---------------------------</p>
      <h1 className="sports">{checkUser(users, 'Igor')}</h1>
      <p>---------------------------</p>
      <h1 className="sports">{checkUsers(users, 'Igor', 'age')}</h1>
      <h1 className="sports">{checkUsers(users, 'Aleksander', 'sport')}</h1>
      <p>---------------------------</p>
      <p>{animal(obj)}</p>
    </div>
  );
};
