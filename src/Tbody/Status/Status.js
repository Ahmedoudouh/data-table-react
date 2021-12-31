import React from "react";
import "./Style-status.css";
let cta = document.getElementById("cta");
export const Status=({status,className})=>{
    return (
        <div>
            <button className={className}id="cta" type="button">{status}</button>
        </div>
    );
}
export default Status;