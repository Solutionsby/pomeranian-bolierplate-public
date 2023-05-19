import { useState } from 'react';
import './styles.css';

export const DateTime = () => {
  const [myDate, setMydate] = useState(2);
  return <div>{myDate}</div>;
};
