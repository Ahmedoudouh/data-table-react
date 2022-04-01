import "./style-active-customers.css";
import React, {useMemo} from "react";
export const Active = ({ allCustomers }) => {

  var activeCustomersCount = allCustomers.filter(
    (customer) => customer.status === "ACTIVE"
  ).length;
  const activeCustomers = useMemo(() =>activeCustomersCount, [allCustomers]);
  return (
    <div>
      <p className="active-customers">
        active customers:
        <i id="bold" className="bold">
          {activeCustomers}
        </i>{" "}
        /<i id="lengthArray">{allCustomers.length}</i>
      </p>
    </div>
  );
};
