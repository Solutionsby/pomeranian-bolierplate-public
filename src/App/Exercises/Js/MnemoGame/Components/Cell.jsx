import React, { useId } from 'react';

export const Cell = ({ value, clicked }) => {
  const uniqueID = useId();
  return (
    <div
      className={`Y ${clicked ? 'clicked' : ''}`}
      // onClick={() => handleClick(uniqueID)}
    >
      {value}
    </div>
  );
};
