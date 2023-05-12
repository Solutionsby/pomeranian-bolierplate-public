import './styles.css';
const bands = [
  {
    band: 'The Clash',
    yearFormed: 1976,
    albums: 6,
    mostFamousSong: 'London Calling',
  },
  {
    band: 'Sex Pistols',
    yearFormed: 1975,
    albums: 1,
    mostFamousSong: 'Anarchyin the UK',
  },
  {
    band: 'Ramones',
    yearFormed: 1974,
    albums: 14,
    mostFamousSong: 'Blitzkrieg Bop',
  },
  {
    band: 'The Cure',
    yearFormed: 1976,
    albums: 13,
    mostFamousSong: 'Just Like Heaven',
  },
  {
    band: 'Joy Division',
    yearFormed: 1976,
    albums: 2,
    mostFamousSong: 'Love Will Tear Us Apart',
  },
  {
    band: 'Siouxsie and the Banshees',
    yearFormed: 1976,
    albums: 11,
    mostFamousSong: 'Hong Kong Garden',
  },
];
const BandObject = bands.map(({ band, yearFormed, albums, mostFamousSong }) => {
  return (
    <tr>
      <td>{band}</td>
      <td>{yearFormed}</td>
      <td>{albums}</td>
      <td>{mostFamousSong}</td>
    </tr>
  );
});

let sum = 0;
bands.forEach((band) => {
  sum += band.albums;
});

export const ArrayBand = () => {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Band</th>
              <th>Year Formed</th>
              <th>No.of Albums</th>
              <th>Most Famus Song</th>
            </tr>
          </thead>
          <tbody>{BandObject}</tbody>
          <tfoot>
            <tr>
              <td>Total Albums</td>
              <td colSpan={3}>{sum}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
