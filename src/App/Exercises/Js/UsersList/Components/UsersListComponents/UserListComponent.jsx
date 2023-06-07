import './userlist.css';

export const UsersListComponent = ({ user, onClick }) => {
  return (
    <ul className="user-list-list">
      {user.map(({ id, name }) => (
        <ul>
          <li key={id}>
            {id + '.' + ' '}
            {name}
            <button onClick={() => onClick(id)}>x</button>
          </li>
        </ul>
      ))}
    </ul>
  );
};
