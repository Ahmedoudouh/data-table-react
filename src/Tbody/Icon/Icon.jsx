import "./Style-icon.css";

export const Icon = ({ array, deleteWhenClick }) => {
    return (
        <div>
            <img onClick={() => deleteWhenClick(array.number)} className="icon padding" id="combinedSort" src="Images/trash.png" />
        </div>
    );
}

export default Icon;