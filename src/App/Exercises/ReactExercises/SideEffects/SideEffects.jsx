import { useEffect, useState } from 'react';
import './styles.css';

export const SideEffects = () => {
  const [value, setValue] = useState([]);
  // useEffect(() => {
  //   console.log('UseEffect - na Value');
  // }, [value]);
  // const [age, setAge] = useState(0);
  // useEffect(() => {
  //   console.log('UseEffect - na Age');
  // }, [age]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('setTimeOut');
  //   }, 2000);
  //   console.log('without SetTmieout');
  // }, []);
  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      const number = Math.floor(Math.random() * 2);
      console.log(number);
      setTimeout(() => {
        if (number === 1) {
          resolve([{ name: 'Olga' }, { name: 'Lukas' }]);
        } else {
          reject([]);
        }
      }, 2000);
    });

    myPromise
      .then((result) => {
        setValue(result);
      })
      .catch((error) => {
        setValue(error);
      });
  }, []);
  return (
    <div className="side-effects">
      <ul>
        {value.map((item) => (
          <li kay={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
