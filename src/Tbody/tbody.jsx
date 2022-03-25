import { Name } from "./Name/name";
import { Number } from "./Number/number";
import { Paragraph } from "./Paragraph/paragraph";
import { Rate } from "./Rate/rate";
import { Checkbox } from "./Checkbox/checkbox";
import { Balance } from "./Balance/balance";
import { Deposit } from "./Deposit/deposit";
import { Status } from "./Status/status";
import { Icon } from "./Icon/icon";
import { IconEdit } from "./icon-edit/icon-edit";
import { Inr } from "./Inr/inr";
import "./style-tbody.css";

export const Tbody = ({ customers, deleteWhenClick, editWhenClick, index }) => {
  setTimeout(() => {
    customers.forEach((row) => {
      if (row.border === true || row.border === "d") {
        row.border = false;
      }
    });
  }, 1000);

  return (
    <tbody className="bg-white" id="mytbody">
      {customers.map((customer) => (
        <tr className="tdClass array">
          <td className="td">
            <Checkbox />
            <span className={customer.border === true ? "newBlock" : "new"}>
              new
            </span>
            <span className={customer.border === "d" ? "newBlock" : "new"}>
              new edit
            </span>
          </td>
          <td className="td">
            <div className="group-customer">
              <Name name={customer.name} />
              <Number number={customer.number} />
            </div>
          </td>
          <td className="td">
            <Paragraph description={customer.description} />
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
            <div className="icons-style">
              <Icon deleteWhenClick={() => deleteWhenClick(customer.number)} />
              <IconEdit
                index={index}
                editWhenClick={() => editWhenClick(customer.number)}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
