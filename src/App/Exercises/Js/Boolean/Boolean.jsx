import './styles.css';

export const BooleanEx = () => {
  let result = 10;

  for (let i = 1; i <= 5; i++) {
    result += i;
  }
  console.log(result);
  const value1 = true;
  const value2 = true;
  const value3 = false;
  const condition = (value1 && value2) || value3;

  return <div>{condition && <h1>Tajny tekst </h1>}</div>;
};
