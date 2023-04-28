import { useState } from 'react';
import './styles.css';

export const ButtonTextWanish = () => {
  const [show, setShow] = useState();

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="wrapper">
      <h1>See or Not</h1>
      <button className="someBtn" onClick={toggleShow}>
        {show ? 'Ukryj' : 'Pokaz Tekst'}
      </button>
      {show && <p>Pokazuje się </p>}
    </div>
  );
};
