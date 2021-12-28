import React from "react";
import "./Style-tbody.css";
import Name from"./Name/Name"

function Tbody() {
    return (
        <tr className="tdClass array">
            <td className="style-icon">
                <div className="td">
                    <input className="checkbox" id="checkbox" type="checkbox" />
                </div>
            </td>
            <td className="td">
                <div className="group-customr">
<Name />
<span className="customr-number">232</span>
                </div>
            </td>
        </tr>
    );
}
export default Tbody;