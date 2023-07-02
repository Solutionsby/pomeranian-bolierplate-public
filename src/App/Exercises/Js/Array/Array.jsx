import { useState } from 'react';
import './styles.css';

export const Array = () => {
  // const [myList, setMyList] = useState([
  //   'Marcin',
  //   'Ania',
  //   'Piotrek',
  //   'Grześ',
  //   'Natalia',
  //   'Natan',
  // ]);
  const [myObjectList] = useState([
    {
      name: 'Kamil',
      age: 99,
      list: ['phone', 'laptop', 'car'],
      adress: {
        city: 'Gdańsk',
        street: 'Subisława',
        postCode: '80-354',
      },
      year: function () {
        const thisYear = new Date().getFullYear();
        return thisYear;
      },
    },
  ]);
  console.log(myObjectList[0].year());
  // console.log(myList.sort());
  // console.log(
  //   myList.filter((element) => element.length === 4 || element.length === 6)
  // );
  // console.log(myList.find((item) => item.length === 6));
  // console.log(myList.filter((element) => element[0] === 'N'));
  // console.log(myObjectList.filter((element) => element.age === 99));
  return (
    <div>
      {myObjectList.map(
        ({ name, age, year, list, adress: { city, street, postCode } }) => (
          <div className="my-object-wrapper">
            <li>{age}</li>
            <li>{name}</li>
            <li>{year()}</li>
            <div>
              {list.map((element) => (
                <li>{element}</li>
              ))}
            </div>
            <li>{city}</li>
            <li>{street}</li>
            <li>{postCode}</li>
          </div>
        )
      )}
      {/* {myList
        .sort()
        .filter((item) => item === 'Ania' || item === 'Grześ')
        .map((element) => (
          <li>{element}</li>
        ))} */}
    </div>
  );
};
