import './styles.css';
import { ButtonUserList } from './Components/ButtonUserList/ButtonUserList';
import { UsersListComponent } from './Components/UsersListComponents/UserListComponent';
import { useState } from 'react';

export const UsersList = () => {
  const [inputValue, setInputValue] = useState('inicialState');

  const sendFormValue = () => {
    setInputValue('');
  };

  return (
    <div className="user-list-main-wrapper">
      <div className="user-input-wrapper">
        <input
          type="text"
          placeholder="Podaj nick"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonUserList>Dodaj</ButtonUserList>
      </div>
      <div className="user-list-wrapper">
        <UsersListComponent></UsersListComponent>
      </div>
    </div>
  );
};
