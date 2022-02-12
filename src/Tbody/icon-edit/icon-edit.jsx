export const IconEdit = ({ editWhenClick }) => {

  return (
    <div>
      <img
      onClick={editWhenClick}
        className="icon padding"
        src="Images/edit.png"
      />
    </div>
  );
};

export default IconEdit;