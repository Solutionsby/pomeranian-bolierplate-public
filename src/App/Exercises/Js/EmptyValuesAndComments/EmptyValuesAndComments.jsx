import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';

import './styles.css';
export const EmptyValuesAndComments = () => {
  // const myText = '  Ala ma kota   ';
  // const myArray = [];
  // const myTextEdit = myText.trim();

  // console.log(myText.toUpperCase());
  // console.log(myText.toLowerCase());
  // console.log(myText.length);
  // console.log(myText.trim()); // usuwa biale znaki
  // console.log(myText.indexOf('a'));
  // console.log(myTextEdit.replace(' ', '_'));
  // console.log(myTextEdit.replaceAll(' ', '_'));
  // console.log(myText.codePointAt(0));

  // console.log(myArray.length);

  let myNewText = 'ala_ma_kota_a_tomek_ma_psa';
  const [text, setText] = useState(myNewText);
  const [pixels, setPixels] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [flag, setFlag] = useState(0);
  // const [typOf, setTypeOf] = useState('');

  function myTextReplace() {
    myNewText = myNewText.replaceAll('_', ' ');
  }
  function addChartText() {
    myNewText = myNewText + '.';
  }
  function firstLetterUpperCase() {
    myNewText = myNewText.charAt(0).toUpperCase() + myNewText.slice(1);
  }

  function editMyText() {
    myTextReplace();
    addChartText();
    firstLetterUpperCase();
    setText(myNewText);
  }

  function getHeight(event) {
    setHeight(event.target.value);
  }
  function getWidthe(event) {
    setWidth(event.target.value);
  }
  function pixelsCalculate() {
    setPixels(Number(width) * Number(height));
    setFlag(0);
  }
  function replacePixelsToMegaPixels() {
    if (flag === 0 && String(pixels).length >= 6) {
      setPixels(Number(pixels) / 1000000);
      setFlag(1);
    }
  }
  return (
    <div className="values-wrapper">
      <p className="my-text">{text}</p>

      <button className="change-text-button" onClick={editMyText}>
        Naciśnij by sformatować tekst
      </button>
      <OutlinedInput
        placeholder="Podaj Wysokość w pixelach"
        className="input-height"
        onChange={getHeight}
      />
      <OutlinedInput
        placeholder="Podaj Szerokość  w pixelach"
        className="input-width"
        onChange={getWidthe}
      />
      <button onClick={pixelsCalculate}>Przyciśnij by obliczyć</button>
      <button onClick={replacePixelsToMegaPixels}>
        Zamień Jednostki na megaPixele
      </button>
      {pixels}
    </div>
  );
};
