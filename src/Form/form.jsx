import { useEffect, useState } from "react";
import { Status } from "./status";
import {
  selectCheck,
  matchNumber,
  required,
  description,
  matchString,
  alreadyExistsName,
  alreadyExistsNumber,
} from "./utils.js";
import { Currency } from "./currency";
import { Input } from "./inputs-form";
import "./form.css";

export const Form = ({ customers, onSubmit, filteredEdit, index }) => {
  const [errorValue, setErrorValue] = useState({});
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [edit, setEdit] = useState();

  const [formData, setFormData] = useState({
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

  function handleInputChange(event) {
    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function editCustomer(filteredEdit) {
    if (filteredEdit !== undefined) {
      setFormData(filteredEdit);
      let copyCustomers = customers.slice();

      let filteredCustomers = copyCustomers.filter(
        (customer) => customers.indexOf(customer) !== index
      );

      setEdit(filteredCustomers);
    }
  }
  useEffect(() => {
    setCheckSubmit(checkSubmit);
  }, [checkSubmit]);

  useEffect(() => {
    editCustomer(filteredEdit);
  }, [filteredEdit]);

  function handleSubmit(event) {
    event.preventDefault();
    if (Object.values(errorValue).every((error) => error === true)) {
      setCheckSubmit(false);
      onSubmit(formData, setFormData);
      setFormData({
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
      setCheckSubmit(true);
    }
  }

  function checkCustomer(formData) {
    if (
      Object.values(formData).every((value) => value === "") &&
      checkSubmit === false
    ) {
      setFormData({
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
    }
    if (checkSubmit) {
      setFormData({
        name: "",
        number: "",
        description: "",
        rate: "",
        inr: "currency",
        balance: "",
        deposit: "",
        status: "status",
      });
      setCheckSubmit(false);
    } else {
      let errorName = "";
      if (formData.name !== undefined) {
        errorName = matchString(formData.name, "name");
        if (formData.name === "") {
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

      let errorNumber = "";
      if (formData.number !== undefined) {
        errorNumber = matchNumber(formData.number, "number");
        if (formData.number === "") {
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
      if (formData.description !== undefined) {
        errorDescription = description(formData.description.length);
        if (formData.description === "") {
          errorDescription = required(formData.description, "description");
        }
      }
      //
      let errorRate = "";
      if (formData.rate !== undefined) {
        errorRate = matchNumber(formData.rate, "rate");
        if (formData.rate === "") {
          errorRate = required(formData.rate, "rate");
        }
      }
      //
      let errorBalance = "";
      if (formData.balance !== undefined) {
        errorBalance = matchNumber(formData.balance, "balance");
        if (formData.balance === "") {
          errorBalance = required(formData.balance, "balance");
        }
      }
      //
      let errorDeposit = "";
      if (formData.deposit !== undefined) {
        errorDeposit = matchNumber(formData.deposit, "deposit");
        if (formData.deposit === "") {
          errorDeposit = required(formData.deposit, "deposit");
        }
      }
      //
      let errorStatus = "";
      if (formData.status !== undefined) {
        errorStatus = selectCheck(formData.status, "status");
      }
      //
      let errorCurrency = "";
      if (formData.inr !== undefined) {
        errorCurrency = selectCheck(formData.inr, "currency");
      }
      setErrorValue((prevErrors) => ({
        ...prevErrors,
        name: errorName,
        number: errorNumber,
        description: errorDescription,
        rate: errorRate,
        balance: errorBalance,
        deposit: errorDeposit,
        status: errorStatus,
        inr: errorCurrency,
      }));
    }
  }

  useEffect(() => {
    checkCustomer(formData);
  }, [formData, customers, checkSubmit]);

  return (
    <div>
      <form onSubmit={handleSubmit} id="form" className="style-add-customer">
        <p className="title">Add customer :</p>
        <Input
          onChange={handleInputChange}
          valueData={formData.name}
          textError={errorValue.name}
          name="name"
          placeholder="add Name"
          type="text"
        />
        <Input
          onChange={handleInputChange}
          valueData={formData.number}
          textError={errorValue.number}
          name="number"
          type="text"
        />
        <Input
          onChange={handleInputChange}
          valueData={formData.description}
          textError={errorValue.description}
          name="description"
          type="text"
        />
        <Input
          onChange={handleInputChange}
          valueData={formData.rate}
          textError={errorValue.rate}
          name="rate"
          type="text"
        />
        <Input
          onChange={handleInputChange}
          valueData={formData.balance}
          textError={errorValue.balance}
          name="balance"
          type="text"
        />
        <Input
          onChange={handleInputChange}
          valueData={formData.deposit}
          textError={errorValue.deposit}
          name="deposit"
          type="text"
        />
        <Status
          functionValue={handleInputChange}
          valueData={formData.status}
          textError={errorValue.status}
        />
        <Currency
          functionValue={handleInputChange}
          valueData={formData.inr}
          textError={errorValue.inr}
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
