import "./form.css";

export const RateInput = ({functionValue,valueData,textError}) => {
    return (
        <div className="form-control group-add-customer">
            <input onChange={functionValue} value={valueData} name="rate" className="input-saerch padding-saerch-add-customer inputAdd" type="text" placeholder="rate" id="rate-add-customer" />
            <small className="error" id="rate">{textError}</small>
        </div>
    );
}
export default RateInput;