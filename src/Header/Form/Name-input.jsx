import "./form.css";

export const NameInput = ({functionValue,valueData,textError}) => {

    
    return (
        <div className="form-control group-add-customer">
            <input value={valueData} name="name" onChange={functionValue} className="input-saerch padding-saerch-add-customer inputAdd" type="text" placeholder="name" id="name-add-customer" />
            <small className="error" id="name">{textError}</small>
        </div>
    );
}
export default NameInput;