import { useState } from 'react';
import { HitAmoleButton } from './HitAMoleButton';

export const SelectButtons = ({ options }) => {
  const SecondOption = options.find((obj) => {
    return obj.defaultValue;
  });

  const initialOptions = options.map((option) => {
    return {
      ...option,
      isActive: false,
    };
  });

  const [newOptions, setNewOptions] = useState(initialOptions);
  const handelClick = (value) => {
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
  };
  return (
    <div className="button-wrapper">
      {newOptions.map(({ label, value, isActive }) => (
        <HitAmoleButton Onclick={() => handelClick(value)} isActive={isActive}>
          {label}
        </HitAmoleButton>
      ))}
    </div>
  );
};
