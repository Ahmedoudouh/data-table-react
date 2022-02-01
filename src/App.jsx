import "./App.css";
import React, { useState } from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";
import Footer from "./Footer/Footer";
import Form from "./Form/form";
import data from "./data";

function App() {
  const [customersList, setCustomersList] = useState(data);
  const [sortedCustomers, setsortedCustomers] = useState(data);
  console.log(sortedCustomers);
  const handelSortChange = (sortName, sortStatus) => {
    let sorted = [...customersList].sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (sortName === "ascending") {
        if (nameA < nameB) {
          return -1;
        }
      }
      if (sortName === "descending") {
        if (nameA > nameB) {
          return -1;
        }
      }
      if (sortStatus === "ascending") {
        if (a.status < b.status) {
          return -1;
        }
        return 0;
      }
      if (sortStatus === "descending") {
        if (a.status > b.status) {
          return -1;
        }
        return 0;
      }
    });
    setsortedCustomers(sorted);
    console.log(sortStatus);
  };
  function handleSubmit(formData) {
    setsortedCustomers((prevArray) => {
      return [formData, ...prevArray];
    });
    setCustomersList((prevArray) => {
      return [formData, ...prevArray];
    });
  }
  const handelSearchChange = (searchValue) => {
    console.log(searchValue)
    const filteredCustomers = customersList.filter((customer) => {
      return (
        customer.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        customer.description
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        customer.number
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
    });
    setsortedCustomers(filteredCustomers);
  };

  return (
    <div>
      <Form customers={customersList} onSubmit={handleSubmit} />
      <Header onSearchchange={handelSearchChange} />
      <Table
        array={sortedCustomers}
        setCustomersList={setsortedCustomers}
        handelSortChange={handelSortChange}
      />
      <Footer array={sortedCustomers} setCustomersList={setsortedCustomers} />
    </div>
  );
}

export default App;
