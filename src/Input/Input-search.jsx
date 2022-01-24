import "./Style-input.css"
import { useState } from "react";

export const Input = ({ filteredFunction, customers }) => {

  const [search, setsearch] = useState("")

  const filteredPersons = customers.filter(
    customer => {
      return (
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.description.toLowerCase().includes(search.toLowerCase())||
        customer.number.toString().toLowerCase().includes(search.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setsearch(e.target.value);
    filteredFunction(filteredPersons)
  };
  return (
    <div>
      <div className="group-search">
        <div className="group-center">
          <div className="search-1"></div>
          <div className="search-2"></div>
          <div className="search-3"></div>
        </div>
        <input onKeyUp={handleChange}
          className="input-saerch-a padding-saerch" type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Input;