import "./style-icon.css";

export const Icon = ({ deleteWhenClick }) => {
  return (
    <div>
      <img
        onClick={deleteWhenClick}
        className="icon padding"
        src="images/trash.png"
        alt="icon"
      />
    </div>
  );
};
