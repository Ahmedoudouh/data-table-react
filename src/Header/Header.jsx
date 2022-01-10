import Input from "../Input/Input-search.jsx"
import "./Style-Header.css";

export const Header = ({ search, arrayOriginal }) => {
  return (
    <div>
      <div className="group-icon bg">
        <div className="icons">
          <Input filteredFunction={search} arrayOriginal={arrayOriginal} />
        </div>
      </div>
    </div>
  );
}

export default Header;