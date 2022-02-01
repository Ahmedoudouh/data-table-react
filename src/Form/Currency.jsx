import "./form.css";

export const Currency = ({functionValue,valueData,textError}) => {
    return (
    <div className="form-control group-add-customer">
        <select onChange={functionValue} value={valueData} name="inr" className="currency inputAdd" id="currency">
            <option value="currency">Currency</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
        </select>
        <small className="error" id="currency">{textError}</small>
    </div>
);
}
export default Currency;