import "./form.css";

export const DescriptionInput = ({functionValue,valueData,textError}) => {
    return (
        <div className="form-control group-add-customer">
            <textarea onChange={functionValue} value={valueData} name="description" className="input-saerch padding-saerch-add-customer inputAdd" type="text" placeholder="description" id="description-add-customer" rows="1"></textarea>
            <small className="error" id="description">{textError}</small>
        </div>
    );
}
export default DescriptionInput;