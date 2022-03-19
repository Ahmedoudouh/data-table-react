import Name from "./Name/Name.jsx";
import Number from "./Number/Number.jsx";
import Pargraph from "./Paragraph/Paragraph.jsx";
import Rate from "./Rate/Rate.jsx";
import Checkbox from "./Checkbox/Checkbox.jsx";
import Balance from "./Balance/Balance.jsx";
import Deposit from "./Deposit/Deposit.jsx";
import Status from "./Status/Status.jsx";
import Icon from "./Icon/Icon.jsx";
import Inr from "./Inr/Inr.jsx";
import "./Style-tbody.css";

export const Tbody = ({ arrayCustomers, setcustomersList }) => {
  const deleteC = (customerId) => {
    const newArray = [...arrayCustomers];

    const index = arrayCustomers.findIndex(
      (customer) => customer.id === customerId
    );

    newArray.splice(index, 1);
    setcustomersList(newArray);
  };

  return (
    <tbody className="bg-white" id="mytbody">
      {arrayCustomers.map((customer) => (
        <tr className="tdClass array">
          <td className="td">
            <Checkbox />
          </td>
          <td className="td">
            <div className="group-customr">
              <Name name={customer.name} />
              <Number number={customer.number} />
            </div>
          </td>
          <td className="td">
            <Pargraph description={customer.description} />
          </td>
          <td className="td">
            <div className="d-flex">
              <Rate rate={customer.rate} />
              <Inr inr={customer.inr} />
            </div>
          </td>
          <td className="td">
            <div className="d-flex">
              <Balance
                className={
                  customer.balance > 0
                    ? "color-green number"
                    : customer.balance < 0
                    ? "color-red number"
                    : "number color-original"
                }
                balance={customer.balance}
              />
              <Inr inr={customer.inr} />
            </div>
          </td>
          <td className="td">
            <div className="d-flex">
              <Deposit deposit={customer.deposit} />
              <Inr inr={customer.inr} />
            </div>
          </td>
          <td className="td">
            <Status
              className={
                customer.status === "ACTIVE"
                  ? "inactive"
                  : customer.status === "INACTIVE"
                  ? "active"
                  : "g"
              }
              status={customer.status}
            />
          </td>
          <td className="td">
            <Icon array={arrayCustomers} deleteWhenClick={deleteC} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
