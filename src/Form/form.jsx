import Status from "./Status.jsx";
import Currency from "./Currency.jsx";
import Input from "./inputs-form";
import { useEffect, useState } from "react";
import "./form.css";

export const Form = ({ customers, onSubmit,filteredEdit }) => {
console.log(filteredEdit)
  const [errorvalue, setErrorvalue] = useState({});
  const [formData, setFormdata] = useState({
    name:"",
    number: "",
    description: "",
    rate: "",
    inr: "",
    balance: "",
    deposit: "",
    status: "",
  });
  function handlechangeName(event) {
    setFormdata((prevFromdata) => {
      return {
        ...prevFromdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handlechangenumber(event) {
    setFormdata((prevFromdata) => {
      return {
        ...prevFromdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handlechangeDescription(event) {
    setFormdata((prevFromdata) => {
      return {
        ...prevFromdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handlechangeRate(event) {
    setFormdata((prevFromdata) => {
      return {
        ...prevFromdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handlechangeBalance(event) {
    setFormdata((prevFromdata) => {
      return {
        ...prevFromdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handlechangeDeposit(event) {
    setFormdata((prevFromdata) => {
      return {
        ...prevFromdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handlechangeStatus(event) {
    setFormdata((prevFromdata) => {
      return {
        ...prevFromdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handlechangeCurrency(event) {
    setFormdata((prevFromdata) => {
      return {
        ...prevFromdata,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handlSubmit(event) {
    event.preventDefault();
    if (Object.values(errorvalue).every((error) => error === true)) {
      onSubmit(formData);
      setFormdata({
        name: "",
        number: "",
        description: "",
        rate: "",
        inr: "",
        balance: "",
        deposit: "",
        status: "",
      });
    } else {
      setErrorvalue((prevErros) => ({
        ...prevErros,
        name: "name is required !",
        number: "number is required !",
        description: "description is required !",
        rate: "rate is required !",
        balance: "balance is required !",
        deposit: "deposit is required !",
        status: "status is required !",
        inr: "rate is required !",
      }));
    }
  }
  useEffect(() => {
    let errorName = "";
    if (!formData.name.match("[a-z A-Z]+$")) {
      errorName = "customer name must be string";
    } else {
      errorName = true;
    }
    if (!formData.name) {
      errorName = "name is required !";
    }
    const customerExist = customers.some((customer) => {
      return customer.name === formData.name;
    });
    if (customerExist) {
      errorName = "customer name already exists";
    }
    //
    let errorNumber = "";
    if (formData.number.match("^[a-z A-Z]+$")) {
      errorNumber = "customer number must be number!";
    } else {
      errorNumber = true;
    }
    if (!formData.number) {
      errorNumber = "number is required !";
    }
    customers.forEach((customer) => {
      if (customer.number == formData.number) {
        errorNumber = "customer number already exists";
      }
    });
    //
    let errorDescription = "";
    if (formData.description.length < 10) {
      errorDescription = "description should have 10 characters!";
    } else {
      errorDescription = true;
    }
    if (!formData.description) {
      errorDescription = "description is required!";
    }
    //
    let erroRrate = "";
    if (formData.rate.match("^[a-z A-Z]+$")) {
      erroRrate = "customer rate must be number!";
    } else {
      erroRrate = true;
    }
    if (!formData.rate) {
      erroRrate = "rate is required!";
    }
    //
    let errorBalance = "";
    if (formData.balance.match("^[a-z A-Z]+$")) {
      errorBalance = "customer rate must be number!";
    } else {
      errorBalance = true;
    }
    if (!formData.balance) {
      errorBalance = "balance is required!";
    }
    //
    let errorDeposit = "";
    if (formData.deposit.match("^[a-z A-Z]+$")) {
      errorDeposit = "customer deposit must be number!";
    } else {
      errorDeposit = true;
    }
    if (!formData.deposit) {
      errorDeposit = "deposit is required!";
    }
    //
    let errorStatus = "";
    if (formData.status === "status") {
      errorStatus = "status is required!";
    } else {
      errorStatus = true;
    }
    //
    let errorCurrency = "";
    if (formData.inr === "currency") {
      errorCurrency = "currency is required!";
    } else {
      errorCurrency = true;
    }
    setErrorvalue((prevErros) => ({
      ...prevErros,
      name: errorName,
      number: errorNumber,
      description: errorDescription,
      rate: erroRrate,
      balance: errorBalance,
      deposit: errorDeposit,
      status: errorStatus,
      inr: errorCurrency,
    }));
  }, [
    formData.name,
    formData.number,
    formData.description,
    formData.rate,
    formData.balance,
    formData.deposit,
    formData.status,
    formData.inr,
    customers,
  ]);
  
  /*
  useEffect(() => {
    setFormdata((prevErros) => ({
        ...prevErros,
        name: filteredEdit.name,
        number: filteredEdit.number,
        description: filteredEdit.description,
        rate: filteredEdit.rate,
        balance: filteredEdit.balance,
        deposit: filteredEdit.deposit,
        status: filteredEdit.status,
        inr: filteredEdit.inr,
      }));
  }, [filteredEdit]);
  */
  
  return (
    <div>
      <form onSubmit={handlSubmit}  id="form" className="style-add-customer">
        <p className="title">Add customer :</p>
        <Input
          onChange={handlechangeName}
          valueData={formData.name}
          textError={errorvalue.name}
          name="name"
          placeholder="add Name"
          type="text"
        />
        <Input
          onChange={handlechangenumber}
          valueData={formData.number}
          textError={errorvalue.number}
          name="number"
          type="text"
        />
        <Input
          onChange={handlechangeDescription}
          valueData={formData.description}
          textError={errorvalue.description}
          name="description"
          type="text"
        />
        <Input
          onChange={handlechangeRate}
          valueData={formData.rate}
          textError={errorvalue.rate}
          name="rate"
          type="text"
        />
        <Input
          onChange={handlechangeBalance}
          valueData={formData.balance}
          textError={errorvalue.balance}
          name="balance"
          type="text"
        />
        <Input
          onChange={handlechangeDeposit}
          valueData={formData.deposit}
          textError={errorvalue.deposit}
          name="deposit"
          type="text"
        />
        <Status
          functionValue={handlechangeStatus}
          valueData={formData.status}
          textError={errorvalue.status}
        />
        <Currency
          functionValue={handlechangeCurrency}
          valueData={formData.inr}
          textError={errorvalue.inr}
        />
        <div className="button">
          <button className="submit" id="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
