import './styles.css';

export const BooleanEx = () => {
  // let result = 10;

  // for (let i = 1; i <= 5; i++) {
  //   result += i;
  // }
  // console.log(result);
  // const value1 = true;
  // const value2 = true;
  // const value3 = false;
  // const condition = (value1 && value2) || value3;

  let age = 19;
  let hasDriverLicense = true;
  let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age < 18) {
      return 'You are too young to drive.';
    } else if (age >= 18 && !hasDriverLicense) {
      return "You can't drive without a driver's license.";
    } else if (age >= 18 && hasDriverLicense && !hasCar) {
      return 'You can drive a rental car.';
    } else {
      return 'You can drive your car!';
    }
  }
  console.log(canDrive(age, hasDriverLicense, hasCar));
  return <div></div>;
};
