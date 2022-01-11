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
import { useState } from "react";

export const Tbody = ({ arrayCustomers, setCustomersList }) => {

    const [deleteC, setdeleteC] = useState()
    arrayCustomers.map(customer => {
        if (customer.number === deleteC) {
            const index = arrayCustomers.indexOf(customer)
            console.log(index)
            arrayCustomers.splice(index, 1)
            console.log(arrayCustomers)
        }
    })

    return (
        <tbody className="bg-white" id="mytbody">
            {
                arrayCustomers.map((customer) =>
                (
                    <tr className="tdClass array" key={customer.number}>
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
                                    className={customer.balance > 0 ? "color-green number" : customer.balance < 0 ? "color-red number" : "number color-original"}
                                    balance={customer.balance} />
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
                                className={customer.status === "ACTIVE" ? "inactive" : customer.status === "INACTIVE" ? "active" : "g"}
                                status={customer.status} />
                        </td>
                        <td className="td">
                            <Icon id={customer.number} deleteWhenClick={setdeleteC} />
                        </td>
                    </tr>
                )
                )
            }
        </tbody>
    )
}

export default Tbody;
