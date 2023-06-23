import './textarea.css';

export const TextArea = ({ cols, rows, objValues }) => {
  return (
    <div className="form-text-area-wrapper">
      {objValues.map(({ placeHolder, label }) => (
        <div className="text-area-wrapper">
          <label htmlFor="">{label}</label>
          <textarea
            name=""
            id=""
            cols={cols}
            rows={rows}
            placeholder={placeHolder}
          ></textarea>
        </div>
      ))}
    </div>
  );
};
