import Status from "./Status.jsx";
import Currency from "./Currency.jsx";
import Input from "./inputs-form";
import { useEffect, useState } from "react";
import "./form.css";

var error = {};

export const Form = ({ customers, onSubmit }) => {
  const [errorvalue, setErrorvalue] = useState({});
  const [formData, setFormdata] = useState({
    name: "",
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
      setErrorvalue(error);
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
    if (
      errorvalue.name == true &&
      errorvalue.number == true &&
      errorvalue.description == true &&
      errorvalue.rate == true &&
      errorvalue.inr == true &&
      errorvalue.balance == true &&
      errorvalue.deposit == true &&
      errorvalue.status == true
    ) {
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
      error.name = "name is required !";
      error.number = "number is required !";
      error.description = "description is required !";
      error.rate = "rate is required !";
      error.inr = "currency is required !";
      error.balance = "balance is required !";
      error.deposit = "deposit is required !";
      error.status = "status is required !";
    }
    setErrorvalue(error);
  }

  useEffect(() => {
    if (!formData.name.match("[a-z A-Z]+$")) {
      error.name = "customer name must be string";
    } else {
      error.name = true;
    }
    if (!formData.name) {
      error.name = "name is required !";
    }
    const customerExist = customers.some((customer) => {
      return customer.name === formData.name;
    });
    if (customerExist) {
      error.name = "customer name already exists";
    }
    //
    if (formData.number.match("^[a-z A-Z]+$")) {
      error.number = "customer number must be number!";
    } else {
      error.number = true;
    }
    if (!formData.number) {
      error.number = "number is required !";
    }
    customers.forEach((customer) => {
      if (customer.number == formData.number) {
        error.number = "customer number already exists";
      }
    });
    //
    if (formData.description.length < 10) {
      error.description = "description should have 10 characters!";
    } else {
      error.description = true;
    }
    if (!formData.description) {
      error.description = "description is required!";
    }
    //
    if (formData.rate.match("^[a-z A-Z]+$")) {
      error.rate = "customer rate must be number!";
    } else {
      error.rate = true;
    }
    if (!formData.rate) {
      error.rate = "rate is required!";
    }
    //
    if (formData.balance.match("^[a-z A-Z]+$")) {
      error.balance = "customer rate must be number!";
    } else {
      error.balance = true;
    }
    if (!formData.balance) {
      error.balance = "balance is required!";
    }
    //
    if (formData.deposit.match("^[a-z A-Z]+$")) {
      error.deposit = "customer deposit must be number!";
    } else {
      error.deposit = true;
    }
    if (!formData.deposit) {
      error.deposit = "deposit is required!";
    }
    //
    if (formData.status === "status") {
      error.status = "status is required!";
    } else {
      error.status = true;
    }
    //
    if (formData.inr === "currency") {
      error.inr = "currency is required!";
    } else {
      error.inr = true;
    }
    setErrorvalue({ ...error });
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

  return (
    <div>
      <form onSubmit={handlSubmit} id="form" className="style-add-customer">
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
