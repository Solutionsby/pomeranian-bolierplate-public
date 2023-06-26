import './inputs.css';
export const Inputs = ({ children, className, options, setValue }) => {
  return (
    <div className={`form-wrapper-div`}>
      <h3>{children}</h3>
      {options.map(({ label, value, method, name, placeHolder, type }) => (
        <div className={className}>
          {type === 'text' && <label For={name}>{label}</label>}
          <input
            className={type}
            type={type}
            id={name}
            name={name}
            value={method}
            placeholder={placeHolder}
            onChange={(e) => setValue(e.target.value, name)}
          />
          {type !== 'text' && <label For={name}>{label}</label>}
        </div>
      ))}
    </div>
  );
};
