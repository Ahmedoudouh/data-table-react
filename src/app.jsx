import React, { useEffect, useState,useContext } from "react";
import { Header } from "./Header/header";
import { Table } from "./Table/table";
import { Footer } from "./Footer/footer";
import { Form } from "./Form/form";
import data from "./data";
import "./app.css";
import { context } from "./context/context";
export const App = () => {
  if (localStorage.getItem("local") === null) {
    localStorage.setItem("local", JSON.stringify(data));
  }
  const { rowsPerPage, setRowsPerPage,currentPage,setCurrentPage,sort,setSort} = useContext(context)
  const [customersList, setCustomersList] = useState(
    JSON.parse(localStorage.getItem("local"))
  );

  //const [sort, setSort] = useState({ name: "", status: "" });
  const [search, setSearch] = useState("");
  const [filteredEdit, setFilteredEdit] = useState({ border: "d" });
  const [submit, setSubmit] = useState();
  const [index, setIndex] = useState();
  


  const handelSortChange = (sortName, sortStatus) => {
    setSort({ name: sortName, status: sortStatus });
  };

  function handleSubmit(formData) {
    if (submit === true) {
      customersList.splice(index, 1, formData);
      setCustomersList([...customersList]);
      setSubmit(false);
      window.scrollTo(0, 1000);
    } else {
      setCustomersList((prevArray) => {
        return [formData, ...prevArray];
      });

      window.scrollTo(0, 1000);
    }
  }

  useEffect(() => {
    setCustomersList(customersList);
  }, [customersList]);

  const customersToRender = [...customersList]
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
      }

      if (sort.status === "descending") {
        if (a.status > b.status) {
          return -1;
        }
      }

      return 0;
    })
    .filter(
      (customer) =>
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.description.toLowerCase().includes(search.toLowerCase()) ||
        customer.number.toString().toLowerCase().includes(search.toLowerCase())
    )
    .slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  const countPage = `${currentPage * rowsPerPage + 1} - ${
    customersToRender.length - rowsPerPage + (currentPage + 1) * rowsPerPage
  } of ${customersToRender.length} `;

  const handleClickNextPage = () => {
    var result = Math.ceil(customersList.length / rowsPerPage);
    if (currentPage + 1 < result) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPreviousPage = () => {
    if (currentPage - 1 >= 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  function deleteCustomer(id) {
    let filtered = customersList.filter((customer) => customer.number !== id);
    if (window.confirm("Are you sure you want to delete")) {
      setCustomersList(filtered);
    }
  }

  function editCustomer(id) {
    let filteredEditCustomers = customersList.filter(
      (customer) => customer.number === id
    );

    window.scrollTo(1000, 0);
    setSubmit(true);
    setFilteredEdit(filteredEditCustomers[0]);
    setFilteredEdit((formData) => {
      return { ...formData, border: "d" };
    });

    setIndex(customersList.indexOf(filteredEditCustomers[0]));
  }

  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(customersList));
  }, [customersList]);

  return (
    <div>
      <Form
        customers={customersList}
        onSubmit={handleSubmit}
        filteredEdit={filteredEdit}
        index={index}
      />
      <Header onSearchChange={setSearch} />
      <Table
        customers={customersToRender}
        deleteWhenClick={deleteCustomer}
        editWhenClick={editCustomer}
        handelSortChange={handelSortChange}
      />
      <Footer
        allCustomers={customersList}
        countPage={countPage}
        onChangeSelect={setRowsPerPage}
        onClickNextPage={handleClickNextPage}
        onClickPreviousPage={handleClickPreviousPage}
      />
    </div>
  );
};
