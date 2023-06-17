import { useState } from 'react';
import './formsToDo.css';
import { setterFunction } from '../../HelpFunctions';
import { ButtonsToDoList } from '../Buttons/ButtonsToDoList';

export const FormsToDo = ({ setIsActiveForms, loadTheData }) => {
  const [dataTitle, SetDataTitle] = useState('');
  const [dataAuthor, SetDataAuthor] = useState('');
  const [dataContext, SetDataContex] = useState('');
  const [answer, setAsnwer] = useState('');
  const [erroAnswer, setErrorAnswer] = useState('');

  const sendDataToApi = async (title, author, context) => {
    console.log(' Chyba poszlo ');
    const respons = await fetch('http://localhost:3333/api/todo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        note: context,
        author: author,
      }),
    });

    if (respons.status === 200) {
      setAsnwer(' Ok Udało się dodać zadanie');
    }
    if (respons.status !== 200) {
      setErrorAnswer('Ups cos poszlo nie tak');
    }
    const content = await respons.json();
    console.log(content);
  };
  return (
    <div className="forms-to-do-list-wrepper">
      <div className="forms-title">
        <h2>Tytul</h2>
        <input
          className="to-do-list-input"
          type="text"
          placeholder="title"
          onChange={(e) => setterFunction(e.target.value, SetDataTitle)}
        />
      </div>
      <div className="forms-author">
        <h2>Autor</h2>
        <input
          className="to-do-list-input"
          type="text"
          placeholder="note"
          onChange={(e) => setterFunction(e.target.value, SetDataAuthor)}
        />
      </div>
      <div className="forms-contents">
        <h2>Treść</h2>
        <input
          className="to-do-list-input"
          type="text"
          placeholder="author"
          onChange={(e) => setterFunction(e.target.value, SetDataContex)}
        />
      </div>
      <div className="forms-action-button-wrapper">
        <ButtonsToDoList
          className={'button-to-do forms-forword-button'}
          onClick={() => {
            setterFunction(false, setIsActiveForms);
            loadTheData();
          }}
        >
          Cofnij
        </ButtonsToDoList>
        <ButtonsToDoList
          className={'button-to-do forms-add-button'}
          onClick={() => sendDataToApi(dataTitle, dataAuthor, dataContext)}
        >
          Dodaj
        </ButtonsToDoList>
      </div>
      <div className="answer-wrapper"></div>
    </div>
  );
};
