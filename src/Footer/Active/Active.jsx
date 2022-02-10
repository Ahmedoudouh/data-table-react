import "./style-active-customers.css";

export const Active = ({ allCustomers }) => {
  var activeCustomersCount = allCustomers.filter(
    (customer) => customer.status == "ACTIVE"
  ).length;

  return (
    <div>
      <p className="active-customers">
        active customers:
        <i id="bold" className="bold">
          {activeCustomersCount}
        </i>{" "}
        /<i id="lengthArray">{allCustomers.length}</i>
      </p>
    </div>
  );
};

export default Active;
