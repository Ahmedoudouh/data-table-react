import React from "react";
import "./Style-footer.css";
import Active from "./Active/Active.jsx"
import PerPage from "./PerPage/Per-page.jsx"
import NextPage from "./NextPage/Next-page.jsx"
import PreviousPage from "./PreviousPage/Previous-page.jsx"

export const Footer = ({ allCustomers,onChangeSelect ,onclickNextPage,countPage}) => {
    return (
        <footer className="content footer">
            <Active allCustomers={allCustomers} />
            <div className="group-footer">
                <PerPage onChange={onChangeSelect}/>
                <div className="style-grid-gap">
                    <span id="count-page" className="style-word">
                        {countPage}
                    </span>
                </div>
                <div className="group-arrow-3">
                    <PreviousPage />
                    <NextPage Onclick={onclickNextPage}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;