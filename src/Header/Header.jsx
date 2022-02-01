import Input from "../Input/Input-search.jsx";
import "./Style-Header.css";
export const Header = ({ onSearchchange }) => {
  return (
    <div className="margin">
      <div className="group-icon bg">
        <div className="icons">
          <Input onchange={onSearchchange} />
        </div>
      </div>
    </div>
  );
};

export default Header;
