import './select.css';
export const Select = ({ children, name, className, objValues, getValue }) => {
  console.log();
  return (
    <div className={className}>
      <label For={name}>{children}</label>
      <select
        name={name}
        id={name}
        onChange={(e) => getValue(e.target.value, 'product')}
      >
        {objValues.map(({ productname, productvalue }) => (
          <option value={productvalue}>{productname}</option>
        ))}
      </select>
    </div>
  );
};
