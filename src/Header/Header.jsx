import Input from "../Input/Input-search.jsx"
import { NameInput } from "./Form/Name-input.jsx";
import NumberInput from "./Form/Number-input.jsx";
import DescriptionInput from "./Form/Description-input.jsx";
import RateInput from "./Form/Rate-input.jsx";
import BalanceInput from "./Form/Balance-input.jsx";
import DepositInput from "./Form/Deposit-input.jsx";
import Status from "./Form/Status.jsx";
import Currency from "./Form/Currency.jsx";
import "./Style-Header.css";
import { useEffect, useState } from "react";

var error = {
}
export const Header = ({ search, customers }) => {
  //const [error, setError] = useState({})
  const [errorvalue, setErrorvalue] = useState({})
  const [formData, setFormdata] = useState({
    name: "",
    number: "",
    description: "",
    rate: "",
    inr: "",
    balance: "",
    deposit: "",
    status: ""
  })
  //name
  function handlechangeName(event) {
    setFormdata(prevFromdata => {
      if (!event.target.value.match("[a-z A-Z]+$")) {
        error.name = "customer name must be string";
      } else {
        error.name = true
      } if (!event.target.value) {
        error.name = 'name is required !'
      }
      customers.map((customer) => {
        if (customer.name === event.target.value) {
          error.name = "customer name already exists"
        }
      })
      console.log(error)
      setErrorvalue(error)
      return {
        ...prevFromdata, [event.target.name]: event.target.value
      }
    })
  }
  //number
  function handlechangenumber(event) {
    setFormdata(prevFromdata => {
      if (event.target.value.match("^[a-z A-Z]+$")) {
        error.number = "customer number must be number!"
      } else {
        error.number = true
      }
      if (!event.target.value) {
        error.number = 'number is required !'
      }
      customers.map((customer) => {
        if (customer.number == event.target.value) {
          error.number = "customer number already exists"
        }
      })
      setErrorvalue(error)
      return {
        ...prevFromdata, [event.target.name]: event.target.value
      }
    })
  }
  //description
  function handlechangeDescription(event) {
    setFormdata(prevFromdata => {
      if (event.target.value.length < 10) {
        error.description = 'description should have 10 characters!';
      } else {
        error.description = true;
      }
      if (!event.target.value) {
        error.description = 'description is required!';
      }
      setErrorvalue(error)
      return {
        ...prevFromdata, [event.target.name]: event.target.value
      }
    })
  }
  //rate
  function handlechangeRate(event) {
    setFormdata(prevFromdata => {
      if (event.target.value.match("^[a-z A-Z]+$")) {
        error.rate = ('customer rate must be number!');
      } else {
        error.rate = (true)
      } if (!event.target.value) {
        error.rate = ('rate is required!');
      }
      setErrorvalue(error)
      return {
        ...prevFromdata, [event.target.name]: event.target.value
      }
    })
  }
  //
  function handlechangeBalance(event) {
    setFormdata(prevFromdata => {
      if (event.target.value.match("^[a-z A-Z]+$")) {
        error.balance = ('customer rate must be number!');
      } else {
        error.balance = (true)
      } if (!event.target.value) {
        error.balance = ('balance is required!');
      }
      setErrorvalue(error)
      return {
        ...prevFromdata, [event.target.name]: event.target.value
      }
    })
  }
  function handlechangeDeposit(event) {
    setFormdata(prevFromdata => {
      if (event.target.value.match("^[a-z A-Z]+$")) {
        error.deposit = ('customer deposit must be number!');
      } else {
        error.deposit = (true)
      } if (!event.target.value) {
        error.deposit = ('deposit is required!');
      }
      setErrorvalue(error)
      return {
        ...prevFromdata, [event.target.name]: event.target.value
      }
    })
  }
  function handlechangeStatus(event) {
    setFormdata(prevFromdata => {
      if (event.target.value==="STATUS") {
        error.status = ('status is required!');
      } 
      setErrorvalue(error)
      return {
        ...prevFromdata, [event.target.name]: event.target.value
      }
    })
  }
  function handlechangeCurrency(event) { }

  function handlSubmit(event) {
    event.preventDefault()
    search(prevArray => {
      return [formData, ...prevArray]
    })
    setErrorvalue(error)
    // validate(formData)
  }
  /*
    const validate = ((values) => {
      const error = {}
      //name
      if (!values.name.match("[a-z A-Z]+$")) {
        error.name = ("customer name must be string");
      } if (!values.name) {
        error.name = ('name is required !')
      } else {
        error.name = (true)
      }
      customers.map((customer) => {
        if (customer.name == values.name) {
          error.name = ("customer name already exists")
        }
      })
  
      //number
      if (values.number.match("^[a-z A-Z]+$")) {
        error.number = ("customer number must be number!")
      } if (!values.number) {
        error.number = ('number is required !')
      } else {
        error.number = (true)
      }
      customers.map((customer) => {
        if (customer.number == values.number) {
          error.number = ("customer number already exists")
        }
      })
  
      //description
      if (values.description.length <= 10) {
        error.description = ('description should have 10 characters!');
      } if (!values.description) {
        error.description = ('description is required!');
      } else {
        error.description = (true)
      }
      // rate
      if (values.rate.match("^[a-z A-Z]+$")) {
        error.rate = ('customer rate must be number!');
      } if (!values.rate) {
        error.rate = ('rate is required!');
      } else {
        error.rate = (true)
      }
      //balance
      if (values.balance.match("^[a-z A-Z]+$")) {
        error.balance = ('customer rate must be number!');
      } if (!values.balance) {
        error.balance = ('balance is required!');
      } else {
        error.balance = (true)
      }
      //deposi
      if (values.deposit.match("^[a-z A-Z]+$")) {
        error.deposit = ('customer deposit must be number!');
      } if (!values.deposit) {
        error.deposit = ('deposit is required!');
      } else {
        error.deposit = (true)
      }
      //statuts
      if (!values.status) {
        error.status = ('status is required!');
      } else {
        error.status = (true)
      }
      //curency
      if (!values.inr) {
        error.inr = ('Curency is required!');
      } else {
        error.inr = (true)
      }
      setErrorvalue(error)
    })
  */


  return (
    <div className="margin">
      <form onSubmit={handlSubmit} id="form" className="style-add-customer">
        <p className="title">Add customer :</p>
        <NameInput functionValue={handlechangeName} valueData={formData.name} textError={errorvalue.name} />
        <NumberInput functionValue={handlechangenumber} valueData={formData.number} textError={errorvalue.number} />
        <DescriptionInput functionValue={handlechangeDescription} valueData={formData.description} textError={errorvalue.description} />
        <RateInput functionValue={handlechangeRate} valueData={formData.rate} textError={errorvalue.rate} />
        <BalanceInput functionValue={handlechangeBalance} valueData={formData.balance} textError={errorvalue.balance} />
        <DepositInput functionValue={handlechangeDeposit} valueData={formData.deposit} textError={errorvalue.deposit} />
        <Status functionValue={handlechangeStatus} valueData={formData.status} textError={errorvalue.status} />
        <Currency functionValue={handlechangeCurrency} valueData={formData.inr} textError={errorvalue.inr} />
        <div className="button">
          <button className="submit" id="submit">Submit</button>
        </div>
      </form>
      <div className="group-icon bg">
        <div className="icons">
          <Input filteredFunction={search} customers={customers} />
        </div>
      </div>
    </div>
  );
}
/*
  function handlSubmit(event) {
    event.preventDefault()
    if (formData.name !== "" || formData.number !== "" || formData.description !== "" || formData.rate !== "" || formData.inr !== "" || formData.balance !== "" || formData.deposit !== "" || formData.status !== "") {
      search(prevArray => {
        return [formData, ...prevArray]
      })
    }
  }
*/
export default Header;