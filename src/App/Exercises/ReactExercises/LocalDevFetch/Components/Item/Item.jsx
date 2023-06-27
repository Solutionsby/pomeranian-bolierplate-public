import './item.css';
import { requestHendler } from '../../HelpFunctions';
import { ButtonsToDoList } from '../Buttons/ButtonsToDoList';
import { TrashIcon } from '../../../../../Components/Icons/TrashIcon';
import { useState } from 'react';
import { setterFunction } from '../../HelpFunctions';

const parsDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toDateString();
};
export const ToDoItem = ({
  id,
  title,
  createdAt,
  author,
  isDone,
  note,
  doneDate,
  loadTheData,
  setIsActiveForms,
  setIsEdyting,
}) => {
  const [isDeleteDone, setIsDeleteDone] = useState(true);
  const [statusError, setstatusError] = useState(false);

  const deleteItem = async (id) => {
    requestHendler('DELETE', id)
      .then((jesonResponse) => loadTheData(jesonResponse))
      .catch(() => setIsDeleteDone(false));
  };

  const updateTheMark = async (id) => {
    requestHendler('PUT', id, true)
      .then((jesonResponse) => loadTheData(jesonResponse))
      .catch(() => setstatusError(true));
  };
  //   Wystylowac to
  return (
    <div className="api-respons">
      <ul>
        <div className="left-item-side">
          {isDeleteDone ? (
            <TrashIcon color={'#000000'} />
          ) : (
            <div className="to-do-delete-items">
              <TrashIcon color={'#ff0000'} />
              <p>Nie udalo sie usunąć </p>
            </div>
          )}

          <ButtonsToDoList
            className={'button-to-do delete-to-do'}
            onClick={() => {
              deleteItem(id);
            }}
          >
            Usuń
          </ButtonsToDoList>
          <ButtonsToDoList
            className={'button-to-do'}
            onClick={() => {
              setterFunction(true, setIsActiveForms);
              setIsEdyting({
                flag: true,
                id: id,
                method: 'PUT',
                title: title,
                note: note,
                author: author,
              });
            }}
          >
            Edytuj
          </ButtonsToDoList>
        </div>
        <li>
          <h1>Tytuł - {title}</h1>
        </li>
        <li>
          <p>Autor - {author}</p>
          <p>{parsDate(createdAt)}</p>
        </li>
        <li>note - {note}</li>
        {/* mozna zrobic z tego komponent, koleny przypadek z czerwienia   */}
        <li
          className="isDone"
          onClick={isDone ? null : () => updateTheMark(id)}
        >
          {isDone ? <p>&#10003;</p> : <p className="grayOne">&#10003;</p>}
        </li>
        <li>
          <p className="doneDate">
            {isDone ? parsDate(doneDate) : statusError ? 'Nie ukonczone' : ''}
          </p>
        </li>
        <br />
      </ul>
    </div>
  );
};
