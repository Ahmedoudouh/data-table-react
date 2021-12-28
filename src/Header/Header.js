import React from "react";
import Input from "../Input/Input-search.js"
import "./Style-Header.css";
function Header() {
  return (
    <div>
        <div className="group-icon">
            <div className="icons">
                <div>
                    <img className="icon padding" id="combinedSort" src="Images/menu.png" />
                </div>
                 <Input />
            </div>
        </div>
    </div>
  );
}
export default Header;