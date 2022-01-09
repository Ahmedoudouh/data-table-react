import "./Style-active-customers.css";

export const Active = ({ ActiveCustomers }) => {
    var activeCustomers = []
    for (var i = 0; i < ActiveCustomers.length; i++) {
        if (ActiveCustomers[i].status == "ACTIVE") {
            activeCustomers.push(ActiveCustomers[i])
        }
    };
    return (
        <div>
            <p className="active-customers">active customers:
                <i id="bold" className="bold">{activeCustomers.length}</i> /
                <i id="lengthArray">{ActiveCustomers.length}</i>
            </p>
        </div>
    );
}

export default Active;