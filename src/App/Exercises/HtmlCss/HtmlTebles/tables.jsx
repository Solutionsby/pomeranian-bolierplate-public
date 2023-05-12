import './styles.css';

export function Tables() {
  return (
    <div className="wrapper-tables">
      <table className="table-parent">
        <tr>
          <th>Plastic</th>
          <th>Acetone</th>
          <th>Flame test</th>
          <th>Heat</th>
          <th>Crease color</th>
        </tr>
        <tr>
          <td>1</td>
          <td>No effect</td>
          <td>Green Color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softened</td>
          <td>No Change</td>
          <td>No Change</td>
          <td>White</td>
        </tr>
        <tr>
          <td>3</td>
          <td>No effect</td>
          <td>Red Color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>4</td>
          <td>No effect</td>
          <td>Green Color</td>
          <td>oftenss</td>
          <td>None</td>
        </tr>
      </table>
    </div>
  );
}
