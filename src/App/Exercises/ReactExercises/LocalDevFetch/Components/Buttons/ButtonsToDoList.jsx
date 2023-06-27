import './buttonsToDoList.css';

export const ButtonsToDoList = ({ children, onClick, className, type }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
