import { useState } from 'react';
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
  }
  editMyText();
  // myTextReplace();
  // addChartText();
  // firstLetterUpperCase();

  return <div>{myNewText}</div>;
};
