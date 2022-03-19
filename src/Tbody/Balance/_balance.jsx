import "./style-balance.css";

export const Balance = ({ balance, className }) => {
  return (
    <div className="group-customer-b">
      <div>
        {" "}
        <span className={className}>{balance}</span>
      </div>
    </div>
  );
};
