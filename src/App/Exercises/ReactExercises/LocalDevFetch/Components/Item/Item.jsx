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
  setError,
  loadTheData,
}) => {
  const deleteItem = async (id) => {
    const respons = await fetch(`http://localhost:3333/api/todo/${id}`, {
      method: 'DELETE',
    });
    if (respons.status === 200) {
      loadTheData();
    }
    if (respons.status !== 200) {
      setError('smething Go Wrong');
    }
  };

  const updateTheMark = async (id) => {
    console.log('test' + id);
    const respons = await fetch(
      `http://localhost:3333/api/todo/${id}/markAsDone`,
      {
        method: 'PUT',
      }
    );
    if (respons.status === 200) {
      loadTheData();
    }
    if (respons.status !== 200) {
      setError('smething Go Wrong');
    }
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
