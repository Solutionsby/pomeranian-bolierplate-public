import './styles.css';
import Button from '@mui/material/Button';

export const HitAmoleButton = ({ label, children, isActive, Onclick }) => {
  return (
    <button
      variant="contained"
      onClick={Onclick}
      className={`button ${isActive ? 'button-active' : ''}`}
    >
      {children}
    </button>
  );
};
