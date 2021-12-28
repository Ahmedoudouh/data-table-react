
import React from "react";
import "./Style-table.css";
import Informations from "../Informations-costumers/Informations.js";
import Tbody from "../Tbody/Tbody";
function Table() {
    return (
        <table className="table">
            <Informations />
            <tbody id="mytbody">
                <Tbody />
            </tbody>
        </table>
    );
}
export default Table;