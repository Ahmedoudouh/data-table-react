import React, { useState, useEffect } from "react";
import "./Style-Per-page.css";
export const PerPage = ({ onChange }) => {
  const [selectValue, setselectValue] = useState(5);
  const selectValueRows = (e) => {
    setselectValue(e.target.value);
  };
  useEffect(() => {
    onChange(selectValue);
  }, [selectValue]);

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
export default PerPage;
