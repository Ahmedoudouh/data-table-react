import "./form.css";

export const Status = ({ functionValue, valueData, textError }) => {
  return (
    <div className="form-control group-add-customer">
      <select
        onChange={functionValue}
        value={valueData}
        name="status"
        className="active-inactive inputAdd"
        id="active-inactive"
      >
        <option value="status">STATUS</option>
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
      </select>
      <small className="error" id="status">
        {textError}
      </small>
    </div>
  );
};
