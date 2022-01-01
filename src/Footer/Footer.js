import React from "react";
import "./Style-footer.css";
import Active from "./Active/Active.js"
import PerPage from "./PerPage/Per-page.js"
import NextPage from "./NextPage/Next-page.js"
import PreviousPage from "./PreviousPage/Previous-page.js"
function Footer() {
    return (
        <footer className="content footer">
            <Active />
            <div className="group-footer">
                <PerPage />
                <div class="style-grid-gap">
                    <span id="count-page" class="style-word">
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