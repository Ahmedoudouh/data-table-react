import "./Style-icon.css";

export const Icon = ({ deleteWhenClick,id }) => {  
        return (
            <div>
                <img onClick={() =>(deleteWhenClick(id))} className="icon padding" id={id} src="Images/trash.png" />
            </div>
        )
}

export default Icon;