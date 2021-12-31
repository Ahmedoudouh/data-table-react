import React from "react";
import "./Style-paragraph.css";


export const Paragraph = ({ description }) => {
    return (
        <div className="paragraph-customr">
            <p>{description}</p>
        </div>
    );
}
export default Paragraph;