import { useState } from 'react';
import './formsToDo.css';
import { requestHendler } from '../../HelpFunctions';
import { setterFunction } from '../../HelpFunctions';
import { ButtonsToDoList } from '../Buttons/ButtonsToDoList';

export const FormsToDo = ({
  setIsActiveForms,
  loadTheData,
  isEdyting,
  setIsEdyting,
}) => {
  const editingObj = isEdyting;
  const [answer, setAsnwer] = useState('');
  const [erroAnswer, setErrorAnswer] = useState('');
  const [isError, setIsError] = useState(false);

  const [title, setTitle] = useState(isEdyting.flag ? editingObj.title : '');
  const [note, setNote] = useState(isEdyting.flag ? editingObj.note : '');
  const [author, setAuthor] = useState(isEdyting.flag ? editingObj.author : '');
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const editToDo = async () => {
    requestHendler(editingObj.method, editingObj.id, undefined, {
      title: title,
      note: note,
      author: author,
    })
      .then(() => setAsnwer(' Ok Udało się edytowac zadanie'))
      .catch(() => {
        setIsError(true);
        setErrorAnswer('Wystapił błąd, dodaj ponownie ');
      });
  };

  const pushANewTodo = async () => {
    requestHendler('POST', undefined, undefined, {
      title: title,
      note: note,
      author: author,
    })
      .then(() => setAsnwer(' Ok Udało się dodać zadanie'))
      .catch(() => {
        setIsError(true);
        setErrorAnswer('Wystapił błąd, dodaj ponownie ');
      });
  };

  const createANewTodo = () => {
    if (title !== '' && author !== '' && note === '') {
      setPopUpVisible(true);
    } else {
      pushANewTodo();
    }
  };

  return (
    <div className="forms-to-do-list-wrepper">
      <div className="forms-title div-input-forms-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Tytuł</h2>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <h2>Author</h2>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <h2>Note</h2>
          <textarea
            rows="10"
            type="text"
            name="note"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
          <div className="buttons-form">
            {isEdyting ? (
              <ButtonsToDoList
                className={'button-to-do forms-add-button'}
                type="submit"
                onClick={() => {
                  editToDo();
                  setIsError(false);
                }}
              >
                edytuj
              </ButtonsToDoList>
            ) : (
              <ButtonsToDoList
                className={'button-to-do forms-add-button'}
                type="submit"
                onClick={() => {
                  createANewTodo();
                  setIsError(false);
                }}
              >
                Dodaj
              </ButtonsToDoList>
            )}
            <ButtonsToDoList
              className={'button-to-do forms-forword-button'}
              onClick={() => {
                setterFunction(false, setIsActiveForms);
                loadTheData();
                setAsnwer('');
                setIsError(false);
                setIsEdyting(false);
              }}
            >
              Cofnij
            </ButtonsToDoList>
          </div>
        </form>
      </div>

      <div className="answer-wrapper">
        <p>{!isError && answer}</p>
        <p>{isError && erroAnswer}</p>
      </div>
      {isPopUpVisible && (
        <div className="pop-up-isVisible">
          <div className="bgc-blur"></div>
          <div className="pop-up">
            <h2>Nie dodałes Notatki ! </h2>
            <ButtonsToDoList
              onClick={() => {
                pushANewTodo();
                setPopUpVisible(false);
              }}
            >
              Tak
            </ButtonsToDoList>
            <ButtonsToDoList
              onClick={() => {
                setPopUpVisible(false);
              }}
            >
              Nie
            </ButtonsToDoList>
          </div>
        </div>
      )}
    </div>
  );
};
