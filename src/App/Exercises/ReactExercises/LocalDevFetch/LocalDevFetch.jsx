import { useEffect, useState } from 'react';
import './styles.css';
import { ToDoItem } from './Components/Item/Item';
import { requestHendler } from './HelpFunctions';
import { FormsToDo } from './Components/Forms/FormsToDo';
import { setterFunction } from './HelpFunctions';
import { ButtonsToDoList } from './Components/Buttons/ButtonsToDoList';

export const LocalDevAndFetch = () => {
  const [array, setArray] = useState([]);
  const [isLoading, SetLoading] = useState(false);
  const [error, setError] = useState();
  const [isActiveForms, setIsActiveForms] = useState(false);

  const loadTheData = async () => {
    SetLoading(true);
    requestHendler('GET')
      .then((jesonResponse) => setArray(jesonResponse))
      .catch((errorMesage) => setError(errorMesage))
      .finally(() => {
        SetLoading(false);
      });
  };
  useEffect(() => {
    loadTheData();
  }, []);
  return (
    <div className="api-respons">
      {error && (
        <div className="error-messege-to-do-list">
          <h1>Hey, you have Error !</h1>
          <h2>error code{error}</h2>
          <h2>Try to restert application </h2>

          <ButtonsToDoList
            className={'button-to-do'}
            onClick={() => {
              setError(undefined);
              loadTheData();
            }}
          >
            Restart - application
          </ButtonsToDoList>
        </div>
      )}

      {isLoading && <p>Loading...</p>}
      {!error && !isActiveForms && array.length > 0 && (
        <div className="div-add-button-wrapper">
          <ButtonsToDoList
            className={'button-to-do'}
            onClick={() => setterFunction(true, setIsActiveForms)}
          >
            +
          </ButtonsToDoList>
        </div>
      )}

      {!error &&
        !isActiveForms &&
        array.map(
          ({ id, title, createdAt, author, isDone, note, doneDate }) => (
            <ToDoItem
              key={id}
              id={id}
              title={title}
              createdAt={createdAt}
              author={author}
              isDone={isDone}
              note={note}
              loadTheData={loadTheData}
              setError={setError}
            />
          )
        )}

      {!error && !isActiveForms && array.length > 0 && (
        <div className="div-add-button-wrapper">
          <ButtonsToDoList
            className={'button-to-do'}
            onClick={() => setterFunction(true, setIsActiveForms)}
          >
            Dodaj Zadanie
          </ButtonsToDoList>
        </div>
      )}
      {!isLoading && !error && !isActiveForms && array.length === 0 && (
        <div className="to-do-list-done">
          <h2>Brawo, Nie masz Aktualnie żadnych zadań do zrealizowania </h2>
          <ButtonsToDoList
            className={'button-to-do'}
            onClick={() => setterFunction(true, setIsActiveForms)}
          >
            Dodaj Zadanie
          </ButtonsToDoList>
        </div>
      )}

      {isActiveForms && (
        <FormsToDo
          setIsActiveForms={setIsActiveForms}
          loadTheData={loadTheData}
        />
      )}
    </div>
  );
};
