import React from "react";
import "./Style-table.css";
import Informations from "../Informations-costumers/Informations.jsx";
import Tbody from "../Tbody/Tbody.jsx";

export const Table = ({ array,setCustomersList,handelSortChange }) => {
    return (
        <table className="table">
            <Informations onChange={handelSortChange} />
            <Tbody arrayCustomers={array} setCustomersList={setCustomersList} />
        </table>
    );
}
export default Table;