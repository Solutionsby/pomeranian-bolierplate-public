import { useEffect, useState } from 'react';
import './styles.css';
import { compannys, employes } from './db';

export const Promisis = () => {
  const [companyData, setData] = useState([compannys]);
  const [userData, setUserData] = useState([employes]);

  useEffect(() => {
    const getData = async () => {
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(companyData);
        }, 100);
      });
      return myPromise
        .then((companyData) => {
          return companyData;
        })
        .catch((err) => console.log(err));
    };

    async function getDatFaster() {
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(userData);
        }, 100);
      });
      return myPromise
        .then((userData) => {
          return userData;
        })
        .catch((err) => console.error(err));
    }
    const compannys = getData();
    const employes = getDatFaster();
    Promise.all([compannys, employes]).then((values) => console.log(values));
  }, []);

  return;
};
