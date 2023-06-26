import { useState } from 'react';
import { Inputs } from './Components/Inpusts/inputs';
import { Selects } from './Components/Select/select';
import './styles.css';
import { Sections } from './Components/Sections/Sections';
import { TextArea } from './Components/TextArea/TextArea';
import { ButtonForms } from './Components/Button/ButtonForm';
import { paymentMethod } from './Components/DB/payment';
import { additionalOptions } from './Components/DB/additionalOptions';
import { buyerData } from './Components/DB/buyerData';

export const Forms = () => {
  const [password, setPassword] = useState('');
  const [productForm, setProductForm] = useState({
    product: '',
    paymentMethod: '',
    additionalOptions: {
      ustawienieSrodowiska: false,
      introDoGitHub: false,
      materialyDodatkowe: false,
    },
    buyerData: {
      name: '',
      nickName: '',
      adres: '',
      emailAdress: '',
      telephonNuber: '',
      note: '',
    },
  });
  const setValue = (val, inputType) => {
    setProductForm({ ...productForm, [inputType]: val });
  };

  // // setProductForm({
  // //   ...productForm,
  // //   additionalOptions: {
  // //     ...productForm.additionalOptions,
  // //     ustawienieSrodowiska: false,
  // //   },
  // });
  const isProperNameAndSurname = productForm.buyerData.name
    .trim()
    .includes(' ');

  const passwordGen = () => {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLenght = 12;
    let password = '';
    for (let i = 0; i < passwordLenght; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  };

  return (
    <div>
      <Sections SectionTitle={'Zamówienie Produktu'}>
        <Selects
          className={'form-select-wrapper'}
          setValue={setValue}
          name={'product'}
          placeHolder={'Wybierz Produkt'}
          value={productForm.product}
          objValues={[
            { value: 'FrontEnd', label: 'Kurs Java Script' },
            { value: 'FrontEndBeginer', label: 'Kurs Java css' },
            { value: 'FrontEndReact', label: 'Kurs Java React' },
          ]}
        >
          Wybierz Produkt
        </Selects>

        <Inputs
          constexName={'paymentMethod'}
          className={'form-input-wrapper radio'}
          setValue={setValue}
          options={paymentMethod}
        >
          Wybierz formę płatności
        </Inputs>

        <Inputs
          className={'form-input-wrapper checkbox '}
          options={additionalOptions}
        >
          Opcje dodatkowe do zamówienia{' '}
        </Inputs>
      </Sections>

      <Sections SectionTitle={'Dane do Realizacji zamówienia'}>
        <Inputs
          className={`form-input-wrapper text`}
          options={buyerData}
        ></Inputs>
        <TextArea
          cols={'10'}
          rows={'20'}
          objValues={[
            {
              label: 'Dodatkowe uwagi do zamowienia',
              placeHolder: 'Jeśli masz jakieś uwagi,wpisz je tutaj',
            },
          ]}
        ></TextArea>
      </Sections>
      <Sections SectionTitle={'Zakładanie Konta '}>
        <Inputs
          options={[
            {
              type: 'checkBox',
              label: 'zakładam Konto',
              name: 'zakładanie konta ',
            },
            {
              type: 'text',
              label: 'moje Hasło',
              placeHolder: 'Podaj Hasło ',
            },
            {
              type: 'text',
              label: 'Powtorz hasło',
              placeHolder: 'Powtorz Haslo ',
            },
          ]}
        >
          Chce Założyć konto razem z zamówieniem
        </Inputs>
      </Sections>
      <Sections SectionTitle={'Zgody i Newsletter'}>
        <Inputs
          options={[
            {
              type: 'checkbox',
            },
          ]}
        >
          Realizując Zamówienie, akceptujesz regulamin naszego sklepu
        </Inputs>
        <Inputs
          options={[
            {
              type: 'checkbox',
            },
          ]}
        >
          Dołącz do naszego Newsletera
        </Inputs>
      </Sections>
      <ButtonForms>Składam Zamówienie</ButtonForms>
    </div>
  );
};
