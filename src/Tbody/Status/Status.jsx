import "./Style-status.css";

export const Status = ({ status, className }) => {
    return (
        <div>
            <button className={className} id="cta" type="button">{status}</button>
        </div>
    );
}
export default Status;