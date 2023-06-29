import { useState } from 'react';
import './styles.css';

export const FormsValidation = () => {
  let passwordLenght = 8;
  const [emailObj, setemailObj] = useState({
    email: {
      isEmailWrong: false,
      wrongEmailMessage: `Podany email jest błedny `,
    },
  });
  const [passwordObj, setPasswordObj] = useState({
    password: {
      isPasswordNotTheSame: false,
      isPaswordNotToShort: false,
      isPasswordNotTheSameMessage: 'Podane Hasł nie są identyczne ',
      isPaswordNotToShortMessage: 'Podane Hasło Jest zbyt krótkie ',
    },
  });

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  // const conteinUppercase = (str) => {
  //   return /[A-Z]/.test(str);
  // };

  const sendFormData = (data) => {
    data.preventDefault();
    const password = data.target.password.value;
    const repetPassword = data.target.repetPassword.value;
    const email = data.target.email.value;
    if (!isValidEmail(email)) {
      setemailObj({
        ...emailObj,
        email: { ...emailObj.email, isEmailWrong: true },
      });
    }
    if (password !== repetPassword) {
      return setPasswordObj({
        ...passwordObj,
        password: { ...passwordObj.password, isPasswordNotTheSame: true },
      });
    } else if (password.length < passwordLenght) {
      return setPasswordObj({
        ...passwordObj,
        password: {
          ...passwordObj.password,
          isPasswordNotTheSame: false,
          isPaswordNotToShort: true,
        },
      });
    }
  };

  console.log(passwordObj.password.isPaswordNotToShort);
  return (
    <div>
      <form onSubmit={sendFormData} className="form-validation">
        <label htmlFor="email">Adres Email:</label>
        <input
          type="text"
          name="email"
          className="form-validation-email"
          placeholder="Podaj adres e-mail"
        />
        <h3>
          {emailObj.email.isEmailWrong && emailObj.email.wrongEmailMessage}
        </h3>
        <label htmlFor="password">Hasło:</label>
        <input type="text" name="password" placeholder="Podaj Hasło " />
        <label htmlFor="password">Powtorz hasło: </label>
        <input
          type="text"
          name="repetPassword"
          placeholder="Podaj Ponownie Hasło"
        />
        {passwordObj.password.isPasswordNotTheSame &&
          passwordObj.password.isPasswordNotTheSameMessage}
        {passwordObj.password.isPaswordNotToShort &&
          passwordObj.password.isPaswordNotToShortMessage}

        <button className="validation-form-button" type="submit">
          Wyślij Dane
        </button>
      </form>
    </div>
  );
};
