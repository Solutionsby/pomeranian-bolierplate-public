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

  function myTextReplace(TextToModify) {
    TextToModify = TextToModify.replaceAll('_', ' ');
    return TextToModify;
  }
  function addChartText(TextToModify) {
    TextToModify = TextToModify + '.';
    return TextToModify;
  }
  function firstLetterUpperCase(TextToModify) {
    TextToModify = TextToModify.charAt(0).toUpperCase() + TextToModify.slice(1);
    return TextToModify;
  }
  function editMyText(text) {
    let firstChange = myTextReplace(text);
    let secondChange = addChartText(firstChange);
    let thirdChange = firstLetterUpperCase(secondChange);
    setText(thirdChange);
  }
  function ClickEditMyText() {
    editMyText(text);
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

      <button className="change-text-button" onClick={ClickEditMyText}>
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
