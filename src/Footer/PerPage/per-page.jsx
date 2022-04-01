import "./style-per-page.css";
import React, { useCallback } from "react";
export const PerPage = ({ onChange }) => {
  const selectValueRows = useCallback((e) => {
    onChange(e.target.value);
  }, []);
  return (
    <div>
      <span className="style-word">
        Rows per page:
        <select onChange={selectValueRows} id="select" className="style-select">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </span>
    </div>
  );
};
