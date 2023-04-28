import { useState } from 'react';
import './styles.css';

export const ButtonCount = () => {
  let [count, setCount] = useState(0);
  let x = 'wanish';
  if (count >= 5) {
    x = 'activeText';
    count = 0;
  }

  return (
    <div className="wrapper">
      <h1>Kliknij 5 razy</h1>
      <button className="someBtn" onClick={() => setCount(count + 1)}>
        Kliknełeś {count} razy
      </button>
      <div className={x}>Ukryta wiadomość </div>
    </div>
  );
};
