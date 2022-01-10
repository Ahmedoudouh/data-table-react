import React from "react";
import "./Style-footer.css";
import Active from "./Active/Active.jsx"
import PerPage from "./PerPage/Per-page.jsx"
import NextPage from "./NextPage/Next-page.jsx"
import PreviousPage from "./PreviousPage/Previous-page.jsx"

export const Footer = ({ array,render }) => {

 

    return (
        <footer className="content footer">
            <Active ActiveCustomers={array} />
            <div className="group-footer">
                <PerPage array={array}  render={render} />
                <div className="style-grid-gap">
                    <span id="count-page" className="style-word">
                    </span>
                </div>
                <div className="group-arrow-3">
                    <PreviousPage />
                    <NextPage />
                </div>
            </div>
        </footer>
    );
}

export default Footer;