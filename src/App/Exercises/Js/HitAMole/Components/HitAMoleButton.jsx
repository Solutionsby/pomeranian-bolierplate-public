import '../styles.css';
import Button from '@mui/material/Button';

export const HitAmoleButton = ({ label, children, isActive, Onclick }) => {
  return (
    <button
      onClick={Onclick}
      className={`buttonMole ${isActive ? 'button-active' : ''}`}
    >
      {children}
    </button>
  );
};
