import Name from "./Name/Name";
import Number from "./Number/Number";
import Pargraph from "./Paragraph/Paragraph";
import Rate from "./Rate/Rate.jsx";
import Checkbox from "./Checkbox/Checkbox";
import Balance from "./Balance/Balance";
import Deposit from "./Deposit/Deposit";
import Status from "./Status/Status";
import Icon from "./Icon/Icon";
import IconEdit from "./icon-edit/icon-edit";
import Inr from "./Inr/Inr";
import "./Style-tbody.css";
export const Tbody = ({ customers, deleteWhenClick, editWhenClick, index }) => {
  setTimeout(() => {
    customers.map((row) => {
      if (row.border === true||row.border === "d") {
        row.border = false;
      }
    });
  }, 1000);

  return (
    <tbody className="bg-white" id="mytbody">
      {customers.map((customer) => (
        <tr
          className="tdClass array"
        >
          <td className="td">
            <Checkbox />
            <div className="new"
                      key={customer.number}
                      className={
                        customer.border === true ? "newBlock" : "new"
                      }>New</div>
                                  <div className="new"
                      key={customer.number}
                      className={
                        customer.border === "d" ? "newBlock" : "new"
                      }>New edit</div>
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

export default Tbody;
