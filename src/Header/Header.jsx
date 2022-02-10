import Input from "../Input/Input-search.jsx";
import "./style-header.css";
export const Header = ({ onSearchChange }) => {
  return (
    <div className="margin">
      <div className="group-icon bg">
        <div className="icons">
          <Input onSearchChange={onSearchChange} />
        </div>
      </div>
    </div>
  );
};

export default Header;
