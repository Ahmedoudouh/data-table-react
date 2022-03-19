import "./form.css";

export const Input = ({
  onChange,
  valueData,
  textError,
  value,
  name,
  type,
  placeholder,
  id,
}) => {
  return (
    <div className="form-control group-add-customer">
      <input
        onChange={onChange}
        value={valueData}
        name={name}
        onChange={onChange}
        className="input-search padding-search-add-customer inputAdd"
        type={type}
        placeholder={name}
      />
      <small className="error">{textError}</small>
    </div>
  );
};
