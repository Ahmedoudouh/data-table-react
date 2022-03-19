import "./style-rate.css";

export const Rate = ({ rate, inr }) => {
  return (
    <div className="group-customer-b">
      <span className="number">{rate}</span>
      <span className="inr">{inr}</span>
    </div>
  );
};
