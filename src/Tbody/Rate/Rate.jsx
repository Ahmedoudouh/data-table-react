import "./Style-rate.css";

export const Rate=({rate,inr})=>{
    return (
        <div className="group-customr-b">
            <span className="number">{rate}</span>
            <span className="inr">{inr}</span>
        </div>
    );
}
export default Rate;