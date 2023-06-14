import { useEffect, useState } from 'react';
import './styles.css';

export const LocalDevAndFetch = () => {
  const [array, setArray] = useState([]);
  const [isLoading, SetLoading] = useState(true);

  useEffect(() => {
    const componentDidMount = () => {
      fetch('http://localhost:3333/api/todo')
        .then((res) => res.json())
        .then((res) => {
          SetLoading(false);
          setArray(res);
        });
    };
    componentDidMount();
  }, []);
  // ToDo - Errors status
  console.log(array);
  return (
    <div className="api-respons">
      {isLoading
        ? 'Loading...'
        : array.map(({ id, title, createdAt, author, isDone }) => (
            <ul>
              <li>Id - {id}</li>
              <li>Tytuł - {title}</li>
              <li>Stworzone - {createdAt}</li>
              <li>Autor - {author}</li>
              <li>Czy Wykonane - {isDone ? 'Wykonane' : 'Nie wykonane'}</li>
              <br />
            </ul>
          ))}
    </div>
  );
};
