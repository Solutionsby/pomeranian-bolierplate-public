import './select.css';
import Select from 'react-select';

export const Selects = ({
  children,
  name,
  className,
  objValues,
  setValue,
  value,
  placeHolder,
}) => {
  const MyOptions = objValues;
  return (
    <div className={className}>
      <h3>{children}</h3>
      <Select
        placeholder={placeHolder}
        options={MyOptions}
        value={MyOptions.find((option) => option.value === value)}
        onChange={(ObjValue) => {
          setValue(ObjValue.value, name);
        }}
      />
    </div>
  );
};
