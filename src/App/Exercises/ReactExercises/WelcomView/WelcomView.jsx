import './styles.css';

export const WelcomeView = () => {
  return (
    <div className="wrapper">
      <h1>Cześć</h1>
      <form>
        <label>
          <p>Wpisz Tekst</p>
          <input type="text" placeholder="Wpisz Tekst" />
        </label>
      </form>
      <button className="someBtn">Kliknij</button>
      <div className="placeHolder">PlaceHolder</div>
    </div>
  );
};
