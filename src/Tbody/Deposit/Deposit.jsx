import "./style-deposit.css";

export const Deposit = ({ deposit }) => {
  return (
    <div className="group-customer-b">
      <span className="number depositUpdate">{deposit}</span>
    </div>
  );
};
