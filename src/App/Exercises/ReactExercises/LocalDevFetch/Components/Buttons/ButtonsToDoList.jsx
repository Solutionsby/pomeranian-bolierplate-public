import './buttonsToDoList.css';

export const ButtonsToDoList = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
