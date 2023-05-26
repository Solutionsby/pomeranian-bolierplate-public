import './styles.css';
import { SelectButtons } from './Components/SelectButtons';

export const HitAMole = () => {
  return (
    <div className="hit-a-mole-wrapper">
      <h4>Hit a Mole</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu w kwadrat, w którym
        się pojawi
      </p>
      <div className="stings-conteiner">
        <div className="label">liczba kretów</div>
        <SelectButtons
          options={[
            {
              label: '1 kret',
              value: 1,
              defaultValue: false,
            },
            { label: '2 krety', value: 2, defaultValue: true },
            { label: '3 krety', value: 3, defaultValue: false },
          ]}
        />
      </div>
      <div className="stings-conteiner">
        <div className="label">Czas gry</div>
        <SelectButtons
          options={[
            {
              label: '1 minuta',
              value: 1,
              defaultValue: true,
            },
            { label: '2 minuty', value: 2, defaultValue: false },
            { label: '3 minuty', value: 3, defaultValue: false },
          ]}
        />
      </div>
      <div className="stings-conteiner">
        <div className="label">Rozpoczęcie gry</div>
        <SelectButtons
          options={[
            {
              label: 'Start',
              value: 1,
            },
          ]}
        />
      </div>
    </div>
  );
};
