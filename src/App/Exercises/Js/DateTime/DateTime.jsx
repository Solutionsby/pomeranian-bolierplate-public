import { useState } from 'react';
import './styles.css';

export const DateTime = () => {
  const [myDate] = useState(new Date());

  // useEffect(() => {
  //   setMydate(new Date().getTime());
  // }, []);
  console.log(myDate);
  return (
    <div>
      {myDate.getDay()} - {myDate.getFullYear()}
    </div>
  );
};
