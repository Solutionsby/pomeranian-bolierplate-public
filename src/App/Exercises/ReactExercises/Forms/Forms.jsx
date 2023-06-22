import { useState } from 'react';
import { Inputs } from './Components/Inpusts/inputs';
import { Select } from './Components/Select/select';
import './styles.css';

export const Forms = () => {
  const [productForm, setProductForm] = useState({
    product: '',
  });
  const getValue = (val, Type) => {
    setProductForm({ ...productForm, [Type]: val });
  };
  console.log(productForm.product);
  return (
    <div>
      <Select
        className={'form-select-wrapper'}
        getValue={getValue}
        name={'products'}
        objValues={[
          { productvalue: 'FrontEnd', productname: 'Kurs Java Script' },
          { productvalue: 'FrontEndBeginer', productname: 'Kurs Java css' },
          { productvalue: 'FrontEndReact', productname: 'Kurs Java React' },
        ]}
      >
        Wybierz Produkt
      </Select>
    </div>
  );
};
