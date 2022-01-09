import "./Style-Per-page.css";

function PerPage() {
    return (
        <div>
            <span className="style-word">
                Rows per page:
                <select id="select"  className="style-select">
                    <option value="5" >5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </span>
        </div>
    );
}
export default PerPage;