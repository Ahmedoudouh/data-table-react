import React from "react";
import Input from "../Input/Input-search.js"
import "./Style-Header.css";
function Header() {
  return (
    <div>
        <div className="group-icon bg">
            <div className="icons">
                 <Input />
            </div>
        </div>
    </div>
  );
}
export default Header;