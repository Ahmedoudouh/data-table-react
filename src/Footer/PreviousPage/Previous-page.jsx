import "./Style-Previous-page.css";

function PreviousPage({onClickPreviousPage}) {
    return (
        <a>
            <i id="arrow-left" className="arrow" onClick={onClickPreviousPage}></i>
        </a>
    );
}
export default PreviousPage;