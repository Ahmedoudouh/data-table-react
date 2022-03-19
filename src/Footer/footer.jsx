import React from "react";
import { Active } from "./Active/active";
import { PerPage } from "./PerPage/per-page";
import { NextPage } from "./NextPage/next-page";
import { PreviousPage } from "./PreviousPage/previous-page";
import "./style-footer.css";

export const Footer = ({
  allCustomers,
  onChangeSelect,
  onClickNextPage,
  countPage,
  onClickPreviousPage,
}) => {
  return (
    <footer className="content footer">
      <Active allCustomers={allCustomers} />
      <div className="group-footer">
        <PerPage onChange={onChangeSelect} />
        <div className="style-grid-gap">
          <span id="count-page" className="style-word">
            {countPage}
          </span>
        </div>
        <div className="group-arrow-3">
          <PreviousPage onClickPreviousPage={onClickPreviousPage} />
          <NextPage onclick={onClickNextPage} />
        </div>
      </div>
    </footer>
  );
};
