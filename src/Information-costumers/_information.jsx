import React, { useEffect, useState } from "react";
import "./style-information.css";

export const Information = ({ onChange }) => {
  const [sortName, setSortName] = useState(undefined);
  const [sortStatus, setSortStatus] = useState(undefined);

  const clickSort = (e) => {
    if (e.target.id === "name-customer") {
      if (sortName === undefined) {
        setSortName("ascending");
      }
      if (sortName === "ascending") {
        setSortName("descending");
      }
      if (sortName === "descending") {
        setSortName(undefined);
      }
    }
    if (e.target.id === "customer-status") {
      if (sortStatus === undefined) {
        setSortStatus("ascending");
      }
      if (sortStatus === "ascending") {
        setSortStatus("descending");
      }
      if (sortStatus === "descending") {
        setSortStatus(undefined);
      }
    }
  };

  useEffect(() => {
    onChange(sortName, sortStatus);
  }, [onChange, sortName, sortStatus]);

  return (
    <thead>
      <tr className="background-table-row-1">
        <td className="padding-left td">
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
                <div
                  className={
                    sortName === "ascending" ? "ascending" : "arrow-up"
                  }
                ></div>
                <div
                  className={
                    sortName === "descending" ? "descending" : "arrow-down"
                  }
                ></div>
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
              <div
                id="arrow-up-status"
                className="arrow-up"
                className={
                  sortStatus === "ascending" ? "ascending" : "arrow-up"
                }
              ></div>
              <div
                id="arrow-down-status"
                className="arrow-down focus"
                className={
                  sortStatus === "descending" ? "descending" : "arrow-down"
                }
              ></div>
            </div>
          </div>
        </td>
        <td className="padding-right td">
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
