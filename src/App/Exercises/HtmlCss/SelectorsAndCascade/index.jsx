import './styles.css';

export function SelectorAndCascade() {
  return (
    <div className="wrapper">
      <div className="klasaDiva">Jestem Bardzo unikalnym elementem</div>
      <div id="SomeID">Jestem Bardzo unikalnym elementem</div>
      <div>Jestem Bardzo unikalnym elementem</div>
      <div>Jestem Bardzo unikalnym elementem</div>
      <div style={{ color: 'orange' }}>Jestem Bardzo unikalnym elementem</div>
      <div>Jestem Bardzo unikalnym elementem</div>
      <div className="square"></div>
    </div>
  );
}
