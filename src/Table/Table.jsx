import React from "react";
import "./Style-table.css";
import Informations from "../Informations-costumers/Informations.jsx";
import Tbody from "../Tbody/Tbody.jsx";

export const Table = ({ array,setCustomersList }) => {
    return (
        <table className="table">
            <Informations arraySort={array} functionSort={setCustomersList}/>
            <Tbody arrayCustomers={array} setCustomersList={setCustomersList} />
        </table>
    );
}
export default Table;