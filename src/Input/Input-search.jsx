import "./Style-input.css";

export const Input = ({ onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div>
      <div className="group-search">
        <div className="group-center">
          <div className="search-1"></div>
          <div className="search-2"></div>
          <div className="search-3"></div>
        </div>
        <input
          onKeyUp={handleChange}
          className="input-saerch-a padding-saerch"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Input;
