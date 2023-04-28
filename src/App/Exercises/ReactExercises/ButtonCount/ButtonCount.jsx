import { useState } from 'react';
import './styles.css';

export const ButtonCount = () => {
  let [count, setCount] = useState(0);
  const [show, SetShow] = useState(false);

  const HandleClick = () => {
    if (count < 4) {
      setCount(count + 1);
      SetShow(false);
    } else if (count < 5) {
      SetShow(true);
      setCount(count + 1);
    } else {
      setCount(0);
      SetShow(false);
    }
  };
  return (
    <div className="wrapper">
      <h1>{count}</h1>
      <button className="someBtn" onClick={HandleClick}>
        click
      </button>
      {show && <p>Pokazuje się </p>}
    </div>
  );
};
