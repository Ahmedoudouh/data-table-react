import "./form.css";

export const BalanceInput = ({functionValue,valueData,textError}) => {
    return (
        <div className="form-control group-add-customer">
            <input value={valueData} onChange={functionValue}  name="balance" className="input-saerch padding-saerch-add-customer inputAdd" type="text" placeholder="balance" id="balance-add-customer" />
            <small className="error" id="balance">{textError}</small>
        </div>
    );
}
export default BalanceInput;