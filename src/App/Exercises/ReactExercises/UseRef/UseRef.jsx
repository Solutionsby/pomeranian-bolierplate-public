import { useEffect, useRef, useState } from 'react';
import './styles.css';

export const UseRef = () => {
  const [mousePos, setMousePos] = useState({});
  const inputRef = useRef();
  const blurRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    top: mousePos.y + 'px',
    left: mousePos.x + 'px',
  };
  const styleTwo = {
    top: mousePos.x + 25 + 'px',
    left: mousePos.y + 25 + 'px',
  };
  return (
    <div>
      {/* <input type="file" ref={inputRef} className="upload-file-input" />
      <button
        className="upload-file-button"
        onClick={() => {
          inputRef.current.click();
        }}
      >
        Dodaj Plik +
      </button> */}
      {/* <input ref={inputRef} type="text" />
      <button
        className="upload-file-button"
        onClick={() => {
          inputRef.current.value = 'tajny Text 123';
        }}
      ></button> */}
      {/* <div className="blur-the-site" ref={blurRef}></div>
      <div className="popUp">
        <button onClick={() => (blurRef.current.style.display = 'none')}>
          Wlyacz Blura{' '}
        </button>
        <button onClick={() => (blurRef.current.style.display = 'flex')}>
          Wlacz Blura
        </button>
      </div> */}
      <div>
        pozycja Myszki
        <b>
          ({mousePos.x}, {mousePos.y})
        </b>
      </div>
      <div className="folow-the-cursor" style={style}>
        &#128512;
      </div>
      <div className="folow-the-cursor two" style={styleTwo}>
        &#128516;
      </div>
    </div>
  );
};
