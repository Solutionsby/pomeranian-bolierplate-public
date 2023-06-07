import './buttonUserList.css';

export const ButtonUserList = ({ children, onClick }) => {
  return (
    <button className="button-user-list" onClick={onClick}>
      {children}
    </button>
  );
};
