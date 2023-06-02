import { useEffect, useState } from 'react';
import classnames from 'classnames';
import db from '../../list/db.json';
import './styles.css';

export const Card = ({
  onClick,
  card,
  index,
  isInactive,
  isFlipped,
  isDisabled,
  checkIstwo,
}) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames('card', {
        'is-flipped': isFlipped,
        'is-inactive': isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">{card}</div>
      <div className="card-face card-back-face"></div>
    </div>
  );
};
