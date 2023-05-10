import { useState } from 'react';
import './styles.css';

export const FaqComponent = ({ title, content }) => {
  const [show, setShow] = useState();

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className="wrapper-faq-component"
      style={{ height: show ? '5vh' : '20vh' }}
    >
      {' '}
      <div
        className="faq-title"
        onClick={toggleShow}
        style={{
          borderBottom: show ? ' 0 ' : '',
        }}
      >
        <p className={show ? '' : 'arrow-test'}>❱</p>
        <p>{title}</p>
      </div>
      <div className="faq-content" style={{ opacity: show ? '0' : '1' }}>
        {content}
      </div>
    </div>
  );
};
