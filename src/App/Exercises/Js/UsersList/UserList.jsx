import './styles.css';
import { ButtonUserList } from './Components/ButtonUserList/ButtonUserList';
import { UsersListComponent } from './Components/UsersListComponents/UserListComponent';
import { useState } from 'react';

export const UsersList = () => {
  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState([]);

  const sendFormValue = () => {
    setUser((prevState) => [
      ...prevState,
      { id: user.length + 1, name: inputValue },
    ]);
    setInputValue('');
  };
  const sendValuesToStorage = () => {
    window.localStorage.setItem('user', JSON.stringify(user));
  };
  const clearValuesFromStorage = () => {
    window.localStorage.removeItem('user');
  };

  const removeValue = (id) => {
    setUser((currentState) => currentState.filter((item) => item.id !== id));
  };

  return (
    <div className="user-list-main-wrapper">
      <div className="user-input-wrapper">
        <input
          type="text"
          placeholder="Podaj nick"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonUserList onClick={sendFormValue} disabled={!inputValue.length}>
          Dodaj
        </ButtonUserList>
        <ButtonUserList onClick={sendValuesToStorage}>Wyslij</ButtonUserList>
        <ButtonUserList onClick={clearValuesFromStorage}>
          Usuń Dane Z Przegladarki
        </ButtonUserList>
      </div>
      <div className="user-list-wrapper">
        <UsersListComponent
          user={user}
          onClick={removeValue}
        ></UsersListComponent>
      </div>
    </div>
  );
};
