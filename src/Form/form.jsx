import Status from "./Status.jsx";
import {
  selectCheck,
  matchNumber,
  required,
  description,
  matchString,
  alreadyExistsName,
  alreadyExistsNumber,
} from "./utils.js";
import Currency from "./Currency.jsx";
import Input from "./inputs-form";
import { useEffect, useState } from "react";
import "./form.css";

export const Form = ({
  customers,
  onSubmit,
  filteredEdit,
  index,
}) => {
  const [errorvalue, setErrorvalue] = useState({});
  const [chekSubmit, setChekSubmit] = useState(false);
  const [formData, setFormdata] = useState({
    name: undefined,
    number: undefined,
    description: undefined,
    rate: undefined,
    inr: undefined,
    balance: undefined,
    deposit: undefined,
    status: undefined,
    border: true,
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
  const [edit, setEdit] = useState();
  function editCustomer(filteredEdit) {
    if (filteredEdit !== undefined) {
      setFormdata(filteredEdit);
      let copyCustomers = customers.slice();
      let filltredEleme = copyCustomers.filter(
        (customer) => customers.indexOf(customer) != index
      );
      setEdit(filltredEleme);
    }
  }
  useEffect(() => {
    setChekSubmit(chekSubmit);
  }, [chekSubmit]);
  useEffect(() => {
    editCustomer(filteredEdit);
  }, [filteredEdit]);

  function handlSubmit(event) {
    event.preventDefault();
    if (Object.values(errorvalue).every((error) => error === true)) {
      setChekSubmit(false);
      onSubmit(formData,setFormdata);
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
      setChekSubmit(true);
    }
  }

  function checkCustomer(formData) {
    if (
      Object.values(formData).every((value) => value == "") &&
      chekSubmit === false
    ) {
      setFormdata({
        name: undefined,
        number: undefined,
        description: undefined,
        rate: undefined,
        inr: undefined,
        balance: undefined,
        deposit: undefined,
        status: undefined,
        border:true,
      });
    }
    if (chekSubmit) {
      setFormdata({
        name: "",
        number: "",
        description: "",
        rate: "",
        inr: "currency",
        balance: "",
        deposit: "",
        status: "status",
      });
      setChekSubmit(false);
    } else {
      let errorName = "";
      if (formData.name != undefined) {
        errorName = matchString(formData.name, "name");
        if (formData.name == "") {
          errorName = required(formData.name, "name");
        }
        let customerExist = alreadyExistsName(customers, formData.name, "name");
        if (edit !== undefined) {
          customerExist = alreadyExistsName(edit, formData.name);
        }
        if (customerExist) {
          errorName = "customer name already exists";
        }
      }
      //
      let errorNumber = "";
      if (formData.number != undefined) {
        errorNumber = matchNumber(formData.number, "number");
        if (formData.number == "") {
          errorNumber = required(formData.number, "number");
        }
        let customerExist = alreadyExistsNumber(customers, formData.number);
        if (edit !== undefined) {
          customerExist = alreadyExistsNumber(edit, formData.number);
        }
        if (customerExist) {
          errorNumber = "customer number already exists";
        }
      }
      //
      let errorDescription = "";
      if (formData.description != undefined) {
        errorDescription = description(formData.description.length);
        if (formData.description == "") {
          errorDescription = required(formData.description, "description");
        }
      }
      //
      let erroRrate = "";
      if (formData.rate != undefined) {
        erroRrate = matchNumber(formData.rate, "rate");
        if (formData.rate == "") {
          erroRrate = required(formData.rate, "rate");
        }
      }
      //
      let errorBalance = "";
      if (formData.balance != undefined) {
        errorBalance = matchNumber(formData.balance, "balance");
        if (formData.balance == "") {
          errorBalance = required(formData.balance, "balance");
        }
      }
      //
      let errorDeposit = "";
      if (formData.deposit != undefined) {
        errorDeposit = matchNumber(formData.deposit, "deposit");
        if (formData.deposit == "") {
          errorDeposit = required(formData.deposit, "deposit");
        }
      }
      //
      let errorStatus = "";
      if (formData.status != undefined) {
        errorStatus = selectCheck(formData.status, "status");
      }
      //
      let errorCurrency = "";
      if (formData.inr != undefined) {
        errorCurrency = selectCheck(formData.inr, "currency");
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
    }
  }
  useEffect(() => {
    checkCustomer(formData);
  }, [formData, customers, chekSubmit]);

  return (
    <div>
      <form
        onSubmit={handlSubmit}
        id="form"
        className="style-add-customer"
      >
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
