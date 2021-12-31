import React from "react";
import "./Style-deposit.css";

export const Deposit=({deposit})=>{
    return (
        <div className="group-customr-b">
        <span className="number depositUpdate">{deposit}</span>
    </div>
    );
}
export default Deposit;