import './item.css';
import { requestHendler } from '../../HelpFunctions';
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
  setError,
  loadTheData,
}) => {
  const deleteItem = async (id) => {
    requestHendler('DELETE', id)
      .then((jesonResponse) => loadTheData(jesonResponse))
      .catch((errorMesage) => setError(errorMesage));
  };

  const updateTheMark = async (id) => {
    requestHendler('PUT', id, true)
      .then((jesonResponse) => loadTheData(jesonResponse))
      .catch((errorMesage) => setError(errorMesage));
  };
  //   Wystylowac to
  return (
    <div className="api-respons">
      <ul>
        <button
          onClick={() => {
            deleteItem(id);
          }}
        >
          Delite
        </button>
        <li>
          <h1>Tytuł - {title}</h1>
        </li>
        <li>
          <p>Autor - {author}</p>
          <p>{parsDate(createdAt)}</p>
        </li>
        <li>note - {note}</li>
        <li className="isDone" onClick={() => updateTheMark(id)}>
          {isDone ? <p>&#10003;</p> : <p className="grayOne">&#10003;</p>}
        </li>
        <li>
          <p className="doneDate">{doneDate ? parsDate(doneDate) : ' '}</p>
        </li>
        <br />
      </ul>
    </div>
  );
};
