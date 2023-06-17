import { useState } from 'react';
import './formsToDo.css';
import { setterFunction } from '../../HelpFunctions';
import { ButtonsToDoList } from '../Buttons/ButtonsToDoList';

export const FormsToDo = ({ setIsActiveForms }) => {
  const [dataTitle, SetDataTitle] = useState('');
  const [dataAuthor, SetDataAuthor] = useState('');
  const [dataContext, SetDataContex] = useState('');

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
    const content = await respons.json();
    console.log(content);
  };
  console.log(dataTitle);
  //  New async Function to put data on - serwer
  //   const deleteItem = async (id) => {
  //     requestHendler('DELETE', id)
  //       .then((jesonResponse) => loadTheData(jesonResponse))
  //       .catch((errorMesage) => setError(errorMesage));
  //   };
  return (
    <div className="forms-to-do-list-wrepper">
      <div className="forms-title">
        <h2>Tytul</h2>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setterFunction(e.target.value, SetDataTitle)}
        />
      </div>
      <div className="forms-author">
        <h2>Autor</h2>
        <input
          type="text"
          placeholder="note"
          onChange={(e) => setterFunction(e.target.value, SetDataAuthor)}
        />
      </div>
      <div className="forms-contents">
        <h2>Treść</h2>
        <input
          type="text"
          placeholder="author"
          onChange={(e) => setterFunction(e.target.value, SetDataContex)}
        />
      </div>
      <ButtonsToDoList
        OnClick={() => sendDataToApi(dataTitle, dataAuthor, dataContext)}
      >
        Dodaj
      </ButtonsToDoList>
      <ButtonsToDoList OnClick={() => setterFunction(false, setIsActiveForms)}>
        Cofnij
      </ButtonsToDoList>
    </div>
  );
};
