
import React from "react";
import "./Style-table.css";
import Informations from "../Informations-costumers/Informations.js";
import Name from "../Tbody/Name/Name.js";
import Number from "../Tbody/Number/Number.js";
import Pargraph from "../Tbody/Paragraph/Paragraph.js";
import Rate from "../Tbody/Rate/Rate.js";
import Checkbox from "../Tbody/Checkbox/Checkbox.js";
import Balance from "../Tbody/Balance/Balance.js";
import Deposit from "../Tbody/Deposit/Deposit.js";
import Status from "../Tbody/Status/Status.js";
import Icon from "../Tbody/Icon/Icon.js";
import Inr from "../Tbody/Inr/Inr.js";
let customers = [{
    name: "Kadin Herwitz",
    number: 1629890939,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "ACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "Cristofer Korsgaard",
    number: 1629890940,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "ACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "Omar Workman",
    number: 1629890941,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "ACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "Ahmed Oudouh",
    number: 1629890942,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "ACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "Mira Dokidis",
    number: 1629890943,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "Jakob Bergson",
    number: 1629890945,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "Carter Rosser",
    number: 1629890944,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "Miracle Septimus",
    number: 1629890000,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "horya zdag",
    number: 1629890946,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "csa lopa",
    number: 1629890949,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "popiya olt",
    number: 1629890950,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "sanaa docm",
    number: 1629890951,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "xxxtination olm",
    number: 5529890951,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "malak mala",
    number: 1629890953,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "hala cpm",
    number: 1688890953,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "ACTIVE",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "folo son",
    number: 1629890955,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "00.00",
    deposit: "500.00",
    status: "ACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "sonds mala",
    number: 1629890956,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "wisla lca",
    number: 1629890777,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "salah mbo",
    number: 1629890957,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "ACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "fouad dauof",
    number: 1629890959,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "ACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "salma sodo",
    number: 1629890960,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "ACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "asai sdom",
    number: 1629890973,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "-270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "malika xqa",
    number: 1629890974,
    description: "06132980",
    rate: "70.00",
    inr: "INR",
    balance: "270.00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "hicham xdas",
    number: 16298906,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "00,00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}, {
    name: "sads xdas",
    number: 1629890976,
    description: "Lorem ipsum dolor sit amet, consectetur...",
    rate: "70.00",
    inr: "INR",
    balance: "00,00",
    deposit: "500.00",
    status: "INACTIVE",
    protect: "unlock",
    select: "unchecked",
}];
function Table() {
    return (
        <table className="table">
            <Informations />
            <tbody className="bg-white" id="mytbody">
                {customers.map((customer) => {
                    return (
                        <tr className="tdClass array">
                            <td className="td ">
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
                            <td className="td d-flex">
                                <Rate rate={customer.rate} />
                                <Inr inr={customer.inr} />
                            </td>
                            <td className="td">
                                <div className="d-flex">
                                <Balance 
                                 className={customer.balance >0? "color-green number":customer.balance <0 ?"color-red number":"number color-original"}
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
                                className={customer.status === "ACTIVE"? "inactive":customer.status === "INACTIVE" ?"active":"g"}
                                status={customer.status} />
                            </td>
                            <td className="td">
                                <Icon />
                            </td>
                        </tr>)
                })}
            </tbody>
        </table>
    );
}
export default Table;