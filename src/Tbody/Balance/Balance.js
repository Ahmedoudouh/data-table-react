import React from "react";
import "./Style-balance.css";
export const Balance=({balance,className})=>{
    return (
        <div className="group-customr-b">
            <div> <span className={className}>{balance}</span></div> 
        </div>
    );
}
export default Balance;