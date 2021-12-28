
import "./Style-Informations.css";
function Informations() {
    return (
       <thead>
           <tr className="background-table-row-1">
           <td className="apdding-left td">
                            <input className="checkbox" id="checkedAll" type="checkbox" />
                        </td>
            <td className="td">
                <div className="group-checkbox">
                    <div className="group-customer-arrow"><span className="customer" id="name-customer">NAME</span>
                        <div className="group-arrow">
                            <div className="arrow-up" id="arrow-up"></div>
                            <div id="arrow-down" className="arrow-down"></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="td"><span className="customer">DESCRIPTION</span></td>
            <td className="td"><span className="customer">RATE</span></td>
            <td className="td"><span className="customer">BALANCE</span></td>
            <td className="td"><span className="customer">DEPOSIT</span></td>
            <td className="td">
                <div className="group-customer-arrow">
                    <span className="customer" id="customer-status">STATUS</span>
                    <div className="group-arrow">
                        <div id="arrow-up-status" className="arrow-up"></div>
                        <div id="arrow-down-status" className="arrow-down focus"></div>
                    </div>
                </div>
            </td>
            <td className="apdding-right td">
                            <div className="group-background">
                                <div className="background-vector"></div>
                                <div className="background-vector"></div>
                                <div className="background-vector"></div>
                            </div>
                        </td>
            </tr>
            </thead>
    );
}
export default Informations;