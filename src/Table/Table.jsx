import React from "react";
import "./Style-table.css";
import Informations from "../Informations-costumers/Informations.jsx";
import Tbody from "../Tbody/Tbody.jsx";

export const Table = ({ customers,handelSortChange,deleteWhenClick}) => {
    return (
        <table className="table">
            <Informations onChange={handelSortChange} />
            <Tbody customers={customers} deleteWhenClick={deleteWhenClick}/>
        </table>
    );
}
export default Table;