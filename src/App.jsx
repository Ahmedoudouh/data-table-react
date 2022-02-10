import "./App.css";
import React, { useState } from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";
import Footer from "./Footer/Footer";
import Form from "./Form/form";
import data from "./data";

function App() {
  const [customersList, setCustomersList] = useState(data);
  const [sort, setSort] = useState({ name: "", status: "" });
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [deleteCustomer, setDeleteCustomer] = useState()
  
  const handelSortChange = (sortName, sortStatus) => {
    setSort({name: sortName, status: sortStatus});
  };
  function handleSubmit(formData) {
    setCustomersList((prevArray) => {
      return [formData, ...prevArray];
    });
  }
  const customerToReander = [...customersList]
   .sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (sort.name === "ascending") {
      if (nameA < nameB) {
        return -1;
      }
    }
    if (sort.name === "descending") {
      if (nameA > nameB) {
        return -1;
      }
    }
    if (sort.status === "ascending") {
      if (a.status < b.status) {
        return -1;
      }
      return 0;
    }
    if (sort.status === "descending") {
      if (a.status > b.status) {
        return -1;
      }
      return 0;
    }
  })
.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.description.toLowerCase().includes(search.toLowerCase()) ||
      customer.number.toString().toLowerCase().includes(search.toLowerCase())
    );
  })
  .slice(currentPage * rowsPerPage,(currentPage + 1) * rowsPerPage);
  const countPage = `${currentPage * rowsPerPage + 1} - ${customerToReander.length - rowsPerPage + (currentPage + 1) * rowsPerPage} of ${customerToReander.length} `;

  const handleclickNextPage = () => {
    var result = Math.ceil(customersList.length / rowsPerPage);
    if (currentPage + 1 < result ) {
      setCurrentPage(currentPage + 1)
    }
  };

  customersList.map((customer) => {
    console.log(deleteCustomer)
     if(customer.number === deleteCustomer){
     const index = customersList.indexOf(customer)
    customersList.splice(index, 1)
     } 
  });

  return (
    <div>
      <Form customers={customersList} onSubmit={handleSubmit} />
      <Header onSearchChange={setSearch} />
      <Table
        customers={customerToReander}
        deleteWhenClick={setDeleteCustomer}
        handelSortChange={handelSortChange}
      />
      <Footer
        allCustomers={customersList}
        countPage={countPage}
        onChangeSelect={setRowsPerPage}
        onclickNextPage={handleclickNextPage}
      />
    </div>
  );
}

export default App;
