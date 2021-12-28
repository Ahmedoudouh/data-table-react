import "./Style-input.css"
function Input() {
  return (
    <div>
      <div className="group-search">
        <div className="group-center">
          <div> <div className="search-1"></div>
            <div className="search-2"></div>
            <div className="search-3"></div></div>
        </div>
        <input className="input-saerch-a padding-saerch" id="search" type="text" placeholder="Search" />
      </div>
    </div>
  );
}
export default Input;