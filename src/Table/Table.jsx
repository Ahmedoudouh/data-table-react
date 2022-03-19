import React from "react";
import { Information } from "../Information-costumers/information";
import { Tbody } from "../Tbody/tbody";
import "./style-table.css";

export const Table = ({
  customers,
  handelSortChange,
  deleteWhenClick,
  editWhenClick,
}) => {
  return (
    <table className="table">
      <Information onChange={handelSortChange} />
      <Tbody
        customers={customers}
        deleteWhenClick={deleteWhenClick}
        editWhenClick={editWhenClick}
      />
    </table>
  );
};
