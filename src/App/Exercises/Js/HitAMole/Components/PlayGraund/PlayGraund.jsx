import { useState } from 'react';
import { Mole } from '../Icon/MollIcon';
import './PlayGraund.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
const fields = [
  {
    id: 1,
    isMolePresent: true,
  },
  {
    id: 2,
    isMolePresent: false,
  },
  {
    id: 3,
    isMolePresent: false,
  },
  {
    id: 4,
    isMolePresent: false,
  },
  {
    id: 5,
    isMolePresent: false,
  },
  {
    id: 6,
    isMolePresent: false,
  },
  {
    id: 7,
    isMolePresent: false,
  },
  {
    id: 8,
    isMolePresent: false,
  },
  {
    id: 9,
    isMolePresent: false,
  },
  {
    id: 10,
    isMolePresent: false,
  },
];

export const PlayGraund = () => {
  function HowlongisArray(array) {
    return array.length;
  }
  const numberOffields = HowlongisArray(fields);

  const randomIndex = getRandomInt(numberOffields);
  const FieldsWithRandomIndex = fields.map((field) => {
    return {
      ...field,
      isMolePresent: field.id === randomIndex,
    };
  });

  const [modifideFields, setModifideFields] = useState(FieldsWithRandomIndex);

  return (
    <div className="play-graund">
      {modifideFields.map((field) => {
        return (
          <div className="field" key={field.id}>
            {field.isMolePresent && <Mole />}
          </div>
        );
      })}
    </div>
  );
};
