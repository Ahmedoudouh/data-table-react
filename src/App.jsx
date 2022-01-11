import "./App.css";
import React, { useState } from "react";
import Header from "./Header/Header.jsx";
import Table from "./Table/Table.jsx";
import Footer from "./Footer/Footer.jsx";
import data from "./data";

function App() {
  const [customersList, setCustomersList] = useState(data)
  return (
    <div>
      <Header  customers={data} search={setCustomersList} />
      <Table array={customersList} setCustomersList={setCustomersList} />
      <Footer array={customersList } setCustomersList={setCustomersList}/>
    </div>
  );
}

export default App;