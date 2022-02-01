import "./Style-Informations.css";
import React, { useEffect, useState } from "react";

export const Informations = ({ onChange }) => {
  const [sortName, setsortName] = useState(undefined);
  const [sortStatus, setsortStatus] = useState(undefined);
  const clickSort = (e) => {
    if (e.target.id == "name-customer") {
      if (sortName === undefined) {
        setsortName("ascending");
      }
      if (sortName === "ascending") {
        setsortName("descending");
      }
      if (sortName === "descending") {
        setsortName(undefined);
      }
    }
    if (e.target.id == "customer-status") {
      if (sortStatus === undefined) {
        setsortStatus("ascending");
      }
      if (sortStatus === "ascending") {
        setsortStatus("descending");
      }
      if (sortStatus === "descending") {
        setsortStatus(undefined);
      }
    }
  };

  useEffect(() => {
    onChange(sortName, sortStatus);
  }, [sortName, sortStatus]);

  return (
    <thead>
      <tr className="background-table-row-1">
        <td className="apdding-left td">
          <input className="checkbox" id="checkedAll" type="checkbox" />
        </td>
        <td className="td">
          <div className="group-checkbox">
            <div className="group-customer-arrow">
              <span
                onClick={clickSort}
                className="customer cursor"
                id="name-customer"
              >
                NAME
              </span>
              <div className="group-arrow">
                <div className="arrow-up" id="arrow-up"></div>
                <div id="arrow-down" className="arrow-down"></div>
              </div>
            </div>
          </div>
        </td>
        <td className="td">
          <span className="customer">DESCRIPTION</span>
        </td>
        <td className="td">
          <span className="customer">RATE</span>
        </td>
        <td className="td">
          <span className="customer">BALANCE</span>
        </td>
        <td className="td">
          <span className="customer">DEPOSIT</span>
        </td>
        <td className="td">
          <div className="group-customer-arrow">
            <span className="customer" id="customer-status" onClick={clickSort}>
              STATUS
            </span>
            <div className="group-arrow">
              <div id="arrow-up-status" className="arrow-up"></div>
              <div id="arrow-down-status" className="arrow-down focus"></div>
            </div>
          </div>
        </td>
        <td className="apdding-right td">
          <div className="group-background">
            <div className="background-vector"></div>
            <div className="background-vector"></div>
            <div className="background-vector"></div>
          </div>
        </td>
      </tr>
    </thead>
  );
};

export default Informations;
