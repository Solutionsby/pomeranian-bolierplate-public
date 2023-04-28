import { useState } from 'react';
import './styles.css';

export const ButtonCount = () => {
  let [count, setCount] = useState(1);
  const [show, SetShow] = useState(false);

  const HandleClick = () => {
    if (count < 5) {
      setCount(count + 1);
      SetShow(false);
    } else {
      setCount(0);
      SetShow(true);
    }
  };
  return (
    <div className="wrapper">
      <h1>Kliknij 5 razy</h1>
      <button className="someBtn" onClick={HandleClick}>
        click
      </button>
      {show && <p>Pokazuje się </p>}
    </div>
  );
};
