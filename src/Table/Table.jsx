import React from "react";
import "./Style-table.css";
import Informations from "../Informations-costumers/Informations.jsx";
import Tbody from "../Tbody/Tbody.jsx";

export const Table = ({ array, setcustomersList }) => {
    return (
        <table className="table">
            <Informations />
            <Tbody arrayCustomers={array} setcustomersList={setcustomersList} />
        </table>

    );
}
export default Table;