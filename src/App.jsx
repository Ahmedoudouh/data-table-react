import "./App.css";
import React, { useState } from "react";
import Header from "./Header/Header.jsx";
import Table from "./Table/Table.jsx";
import Footer from "./Footer/Footer.jsx";
import data from "./data";

function App() {
  const [customersList, setCustomersList] = useState(data)
  console.log(customersList)
  const [sortedCustomers, setsortedCustomers] = useState(data)
  console.log(sortedCustomers)
  const handelSortChange = (sortName, sortStatus) => {

    let sorted = [...customersList].sort((a, b) => {
      var nameA = a.name.toUpperCase()
      var nameB = b.name.toUpperCase()
      if (sortName === "ascending") {
        if (nameA < nameB) {
          return -1
        }

      }
      if (sortName === "descending") {
        if (nameA > nameB) {
          return -1
        }

      }
      if (sortStatus === "ascending") {
        if (a.status < b.status) {
          return -1
        }
        return 0
      }
      if (sortStatus === "descending") {
        if (a.status > b.status) {
          return -1
        }
        return 0
      }
    })
    setsortedCustomers(sorted)
    console.log(sortStatus)
  };

  return (
    <div>
      <Header
        customers={customersList}
        search={setsortedCustomers}
        setCustomersList={setCustomersList} />
      <Table
        array={sortedCustomers}
        setCustomersList={setsortedCustomers}
        handelSortChange={handelSortChange} />
      <Footer
        array={sortedCustomers}
        setCustomersList={setsortedCustomers} />
    </div>
  );
}

export default App;