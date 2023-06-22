import './inputs.css';
export const Inputs = ({ children, type, className }) => {
  return (
    <div className={className}>
      <label For="2">{children}</label>
      <input name="2" id="2" type={type} />
    </div>
  );
};
