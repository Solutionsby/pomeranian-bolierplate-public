import './styles.css';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';

export const MaterialUIBasicElements = () => {
  // const [name, setName] = useState('');

  const [cashValue, setCashValue] = useState(10001);
  const [monthValue, setMonthValue] = useState(6);
  const [calcRate, setCalcRate] = useState();
  const [error, setError] = useState();

  const MOUNTH_VALUE_MAX = 48;
  const MOUNTH_VALUE_MIN = 6;

  const CREDIT_VALUE_MAX = 500000;
  const CREDIT_VALUE_MIN = 10000;

  const calculateRate = (cashValue, monthValue) => {
    if (
      cashValue >= CREDIT_VALUE_MIN &&
      cashValue <= CREDIT_VALUE_MAX &&
      monthValue <= MOUNTH_VALUE_MAX &&
      monthValue >= MOUNTH_VALUE_MIN
    ) {
      setCalcRate(Math.ceil(cashValue / monthValue));
      setError('');
    } else setError('Wrong Value');
  };

  useEffect(() => {
    calculateRate(cashValue, monthValue);
  }, [cashValue, monthValue]);

  const handleCreditValue = (event) => {
    setCashValue(event.target.value);
  };
  const handleMonthValue = (event) => {
    setMonthValue(event.target.value);
  };

  // function KerditeCalculation(x, y) {
  //   return x / y;
  // }

  // function handleClick() {
  //   console.log(name);
  // }
  // const InputHandleClick = (event) => {
  //   setName(event.target.value);
  // };
  return (
    <div>
      {/* <Stack spacing={2} direction="row">
        <OutlinedInput className="input-elements" onChange={InputHandleClick} />
        <Button variant="contained" onClick={handleClick}>
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
      <Slider
        aria-label="Mounth"
        defaultValue={1}
        onChange={handleMonthValue}
        value={monthValue}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={6}
        max={48}
      />
      <OutlinedInput
        className="input-elements"
        type="number"
        value={monthValue}
        onChange={handleMonthValue}
        defaultValue="6"
      />
      <Slider
        aria-label="Cash"
        onChange={handleCreditValue}
        defaultValue={1000}
        value={cashValue}
        valueLabelDisplay="auto"
        step={500}
        marks
        min={CREDIT_VALUE_MIN}
        max={CREDIT_VALUE_MAX}
      />
      <OutlinedInput
        className="input-elements"
        type="number"
        min={10000}
        value={cashValue}
        onChange={handleCreditValue}
        defaultValue="10000"
      />
      <p>
        Chcesz pożyczyć {cashValue} zl na {monthValue}
      </p>
      <p>{error}</p>
      <p>Rata Kredytu wyniesie {calcRate} zl</p>
    </div>
  );
};
