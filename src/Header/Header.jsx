import Input from "../Input/Input-search.jsx"
import "./Style-Header.css";

export const Header = ({ search, customers }) => {
  return (
    <div>
      <div className="group-icon bg">
        <div className="icons">
          <Input filteredFunction={search} customers={customers} />
        </div>
      </div>
    </div>
  );
}

export default Header;