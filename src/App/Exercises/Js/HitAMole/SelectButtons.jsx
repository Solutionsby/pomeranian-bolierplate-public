import { useState } from 'react';
import { HitAmoleButton } from './HitAMoleButton';

export const SelectButtons = ({ options }) => {
  const initialOptions = options.map((option) => {
    return {
      ...option,
      isActive: false,
    };
  });

  const [newOptions, setNewOptions] = useState(initialOptions);

  console.log(newOptions);

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
    <div>
      {newOptions.map(({ label, value, isActive }) => (
        <HitAmoleButton Onclick={() => handelClick(value)} isActive={isActive}>
          {label}
        </HitAmoleButton>
      ))}
    </div>
  );
};
