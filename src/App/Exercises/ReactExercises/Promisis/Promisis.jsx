import { useEffect, useState } from 'react';
import './styles.css';
import { compannys, employes } from './db';

export const Promisis = () => {
  const [companyData, setData] = useState([]);
  const [userData, setUserData] = useState([]);

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
  }, []);

  return (
    <>
      <h5>Companies</h5>
      {compannys.map((company) => (
        <div key={company.companyId} title={company.companyId}>
          {company.companyname}
        </div>
      ))}
      <hr />
      <h5>Employees</h5>
      {employes.map((employee) => (
        <div key={employee.userId} title={employee.id}>
          <b>Username: {employee.username}</b>
          <p>
            {employee.firstName} {employee.lastName}, DoB:{' '}
            {`${employee.birthdate.getDay()}.${employee.birthdate.getMonth()}.${employee.birthdate.getFullYear()}`}
          </p>
        </div>
      ))}
    </>
  );
};
