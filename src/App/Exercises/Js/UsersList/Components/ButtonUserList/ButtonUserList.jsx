import './buttonUserList.css';

export const ButtonUserList = ({ children, onClick, disabled }) => {
  return (
    <button className="button-user-list" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
