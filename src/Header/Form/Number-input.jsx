import "./form.css";

export const NumberInput = ({functionValue,valueData,textError}) => {
    return (
        <div className="form-control group-add-customer">
            <input onChange={functionValue}  name="number" value={valueData} className="input-saerch padding-saerch-add-customer inputAdd" type="text" placeholder="number" id="number-add-customer" />
            <small className="error" id="number">{textError}</small>
        </div>
    );
}
export default NumberInput;