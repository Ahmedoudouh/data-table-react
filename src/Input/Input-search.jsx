import "./style-input.css";

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
          className="input-search-a padding-search"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
