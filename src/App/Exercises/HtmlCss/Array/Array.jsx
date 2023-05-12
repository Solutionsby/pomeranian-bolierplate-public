import './styles.css';

export const Array = () => {
  const array1 = ['A', 'B', 'C'];

  const mappedArray1 = array1.map((item) => {
    return item + 'x';
  });
  console.log(mappedArray1);

  const cars = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];
  const renderCars = cars.map((car) => {
    return <li>{car}</li>;
  });

  const carObject = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
  ];

  const carObjectRender = carObject.map(({ id, make, model, year, owner }) => {
    return (
      <li key={id}>
        {make}---{model}---{year}---{owner}
      </li>
    );
  });

  return (
    <div className="array-wrapper">
      <h2>Samochody</h2>
      <ul>{renderCars}</ul>
      <ul>{carObjectRender}</ul>
    </div>
  );
};
