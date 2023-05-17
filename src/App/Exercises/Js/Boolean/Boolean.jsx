import { useState } from 'react';
import './styles.css';
import OutlinedInput from '@mui/material/OutlinedInput';

export const BooleanEx = () => {
  const [number, setNumber] = useState('0');
  // let result = 10;

  // for (let i = 1; i <= 5; i++) {
  //   result += i;
  // }
  // console.log(result);
  // const value1 = true;
  // const value2 = true;
  // const value3 = false;
  // const condition = (value1 && value2) || value3;

  // let age = 19;
  // let hasDriverLicense = true;
  // let hasCar = true;

  // function canDrive(age, hasDriverLicense, hasCar) {
  //   if (age < 18) {
  //     return 'You are too young to drive.';
  //   } else if (age >= 18 && !hasDriverLicense) {
  //     return "You can't drive without a driver's license.";
  //   } else if (age >= 18 && hasDriverLicense && !hasCar) {
  //     return 'You can drive a rental car.';
  //   } else {
  //     return 'You can drive your car!';
  //   }
  // }
  // console.log(canDrive(age, hasDriverLicense, hasCar));

  const TakeANumber = (event) => {
    setNumber(event.target.value);
  };

  const NumberValue = (number) => {
    if (number < 1) {
      return 'Liczba jest mniejsza od 1';
    }
    if (number > 10) {
      return 'Liczba jest większa niż 10';
    }
    if (number % 2 !== 0) {
      return 'liczba nie jest parzysta ';
    } else {
      return CircleCalculations(Number(number));
    }
  };
  const CircleCalculations = (number) => {
    return Math.ceil(Math.PI * (number * number));
  };
  return (
    <div>
      <OutlinedInput
        value={number}
        className="pi-input"
        type="number"
        onChange={TakeANumber}
      />
      <p>{NumberValue(number)}</p>
    </div>
  );
};
