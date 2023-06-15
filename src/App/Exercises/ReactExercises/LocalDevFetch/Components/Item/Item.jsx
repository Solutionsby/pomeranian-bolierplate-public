import './item.css';
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
  test,
}) => {
  //   Wystylowac to
  return (
    <div className="api-respons">
      <ul>
        <button onClick={() => test(id)}>Delite</button>
        <li>
          <h1>Tytuł - {title}</h1>
        </li>
        <li>
          <p>Autor - {author}</p>
          <p>{parsDate(createdAt)}</p>
        </li>
        <li>note - {note}</li>
        <li className="isDone">
          {isDone ? <p>&#10003;</p> : <p className="redOne">x</p>}
        </li>
        <li>
          <p className="doneDate">{doneDate ? parsDate(doneDate) : ' '}</p>
        </li>
        <br />
      </ul>
    </div>
  );
};
