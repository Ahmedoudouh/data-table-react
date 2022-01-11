import React, { useState } from "react";
import "./Style-Per-page.css";
export const PerPage = ({ array, setCustomersList }) => {

    const [selectValue, setselectValue] = useState()
    let copieArr = [...array].slice(0, selectValue)
    const selectValueRows = e => {
        setselectValue(e.target.value)
        setCustomersList(copieArr)
    };
    //console.log(array)

    return (
        <div>
            <span className="style-word">
                Rows per page:
                <select onChange={selectValueRows} id="select" className="style-select" >
                    <option value="5">5</option>
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