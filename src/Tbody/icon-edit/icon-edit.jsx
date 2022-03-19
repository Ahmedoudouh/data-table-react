export const IconEdit = ({ editWhenClick }) => {
  return (
    <div>
      <img
        onClick={editWhenClick}
        className="icon padding"
        src="images/edit.png"
        alt="icon delete"
      />
    </div>
  );
};
