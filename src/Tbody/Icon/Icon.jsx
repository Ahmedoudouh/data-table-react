import "./Style-icon.css";

export const Icon = ({ deleteWhenClick, id }) => {
  const clickDelete = (e) => {
    deleteWhenClick(e.target.id);
  };
  return (
    <div>
      <img
        onClick={clickDelete}
        className="icon padding"
        id={id}
        src="Images/trash.png"
      />
    </div>
  );
};

export default Icon;
