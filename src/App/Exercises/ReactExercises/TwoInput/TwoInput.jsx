import './stylesTwoInput.css';

export const TwoInput = () => {
  return (
    <div className="wrapper">
      <h1>Czy A jest wieksze od B ?</h1>
      <form>
        <label>
          <p>Podaj Liczbę A:</p>
          <input type="text" name="name" placeholder="A" />
          <p>Podaj Liczbę B:</p>
          <input type="text" name="name" placeholder="B" />
          <p>test</p>
        </label>
      </form>
      <button className="CheckButton">Sprawdź</button>
      <button className="ResetButton">Reset</button>
    </div>
  );
};
