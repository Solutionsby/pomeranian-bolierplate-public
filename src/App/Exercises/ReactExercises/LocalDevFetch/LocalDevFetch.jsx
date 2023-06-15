import { useEffect, useState } from 'react';
import './styles.css';
import { ToDoItem } from './Components/Item/Item';

export const LocalDevAndFetch = () => {
  const [array, setArray] = useState([]);
  const [isLoading, SetLoading] = useState(false);
  const [error, setError] = useState();

  //  Nie wiem czy działa , id przekazuje prawidlowo -  baza danych wywala sie  - TypeError: Cannot read properties of undefined (reading 'findIndex') linia 146
  const deleteItem = (id) => {
    console.log(id);
    fetch(`http://localhost:3333/api/todo/${id}`, {
      method: 'DELETE',
    });
  };

  const componentDidMount = async () => {
    SetLoading(true);
    const respons = await fetch('http://localhost:3333/api/todo');
    const jesonResponse = await respons.json();

    if (respons.status === 200) {
      setArray(jesonResponse);
    }
    // Heding satus - what error we had
    if (respons.status !== 200 && jesonResponse.message) {
      setError('ups Something go wrong');
    }
    SetLoading(false);
  };
  useEffect(() => {
    componentDidMount();
  }, []);
  return (
    <div className="api-respons">
      {error && (
        <div>
          <h3>Something Go wrong - {error}, </h3>
          <h3>{error}</h3>
          <button
            className="restart-buttton-todolist"
            onClick={() => {
              setError(undefined);
              componentDidMount();
            }}
          >
            Restart - application
          </button>
        </div>
      )}

      {isLoading && <p>Loading...</p>}

      {!error &&
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
              doneDate={doneDate}
              test={deleteItem}
            />
          )
        )}
    </div>
  );
};
