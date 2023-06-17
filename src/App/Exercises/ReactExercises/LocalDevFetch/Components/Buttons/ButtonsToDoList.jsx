import './buttonsToDoList.css';

export const ButtonsToDoList = ({ children, OnClick }) => {
  return (
    <div>
      <button onClick={OnClick}>{children}</button>
    </div>
  );
};
