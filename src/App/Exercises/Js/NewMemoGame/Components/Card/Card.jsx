import classnames from 'classnames';
import './styles.css';
import '../IMG/cardBackFace.jpg';

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
    </div>
  );
};
