import "./form.css";

export const DepositInput = ({functionValue,valueData,textError}) => {
    return (
        <div className="form-control group-add-customer">
            <input onChange={functionValue} value={valueData} name="deposit" className="input-saerch padding-saerch-add-customer inputAdd" type="text" placeholder="deposit" id="deposit-add-customer" />
            <small className="error" id="deposit">{textError}</small>
        </div>
    );
}
export default DepositInput;