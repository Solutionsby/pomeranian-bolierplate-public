import { useState } from 'react';
import { Inputs } from './Components/Inpusts/inputs';
import { Selects } from './Components/Select/select';
import './styles.css';
import { Sections } from './Components/Sections/Sections';
import { TextArea } from './Components/TextArea/TextArea';
import { ButtonForms } from './Components/Button/ButtonForm';

export const Forms = () => {
  const [productForm, setProductForm] = useState({
    product: '',
    paymentMethod: '',
    additionalOptions: {
      ustawienieSrodowiska: false,
      introDoGitHub: false,
      materialyDodatkowe: false,
    },
  });
  const setValue = (val, inputType) => {
    setProductForm({ ...productForm, [inputType]: val });
  };
  console.log(productForm.product);

  // // setProductForm({
  // //   ...productForm,
  // //   additionalOptions: {
  // //     ...productForm.additionalOptions,
  // //     ustawienieSrodowiska: false,
  // //   },
  // });

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
          type={'radio'}
          name={'paymentMethod'}
          className={'form-input-wrapper radio'}
          setValue={setValue}
          objValues={[
            {
              label: 'blik',
              method: 'blik',
              name: 'paymentMethod',
              type: 'radio',
            },
            {
              label: 'paypal',
              method: 'paypal',
              name: 'paymentMethod',
              type: 'radio',
            },
            {
              label: 'przelew tradycyjny',
              method: 'przelew tradycyjny',
              name: 'paymentMethod',
              type: 'radio',
            },
          ]}
        >
          Wybierz formę płatności
        </Inputs>

        <Inputs
          type={'checkbox'}
          className={'form-input-wrapper checkbox '}
          objValues={[
            {
              label: 'ustawienie środowiska',
              method: 'ustawienie środowiska',
              name: 'additionalOptions',
              type: 'checkbox',
            },
            {
              label: 'intro do GitHub',
              method: 'intro do GitHub',
              name: 'additionalOptions',
              type: 'checkbox',
            },
            {
              label: 'Materialy Dodatkowe',
              method: 'Materialy Dodatkowe',
              name: 'additionalOptions',
              type: 'checkbox',
            },
          ]}
        >
          Opcje dodatkowe do zamówienia{' '}
        </Inputs>
      </Sections>
      <Sections SectionTitle={'Dane do Realizacji zamówienia'}>
        <Inputs
          type={'text'}
          className={`form-input-wrapper text`}
          objValues={[
            {
              label: 'imię i Nazwisko',
              placeHolder: 'Imię i Nazwisko',
              name: 'name',
              type: 'text',
            },
            {
              label: 'Twój pseudonim',
              placeHolder: 'Pseudonim',
              name: 'nickName',
              type: 'text',
            },
            {
              label: 'Adres do wysyłki',
              placeHolder: 'adres, na który mamy wysłać zamówienie',
              name: 'adres',
              type: 'text',
            },
            {
              label: 'Adres do e-mail',
              placeHolder: 'jan.kowalski@gmail.com',
              name: 'email',
              type: 'text',
            },
            {
              label: 'Numer Kontaktowy',
              placeHolder: '+48 888 888 888',
              name: 'tel',
              type: 'text',
            },
          ]}
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
          objValues={[
            {
              type: 'checkBox',
              label: 'zakładam Konto',
              name: 'zakładanie konta ',
            },
            {
              type: 'text',
              label: 'moje Hasło',
              placeHolder: 'test',
            },
            {
              type: 'text',
              label: 'Powtorz hasło',
              placeHolder: 't',
            },
          ]}
        >
          Chce Założyć konto razem z zamówieniem
        </Inputs>
      </Sections>
      <Sections SectionTitle={'Zgody i Newsletter'}>
        <Inputs
          objValues={[
            {
              type: 'checkbox',
            },
          ]}
        >
          Realizując Zamówienie, akceptujesz regulamin naszego sklepu
        </Inputs>
        <Inputs
          objValues={[
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
