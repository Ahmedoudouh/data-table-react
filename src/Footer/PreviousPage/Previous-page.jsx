import "./style-previous-page.css";

export const PreviousPage = ({ onClickPreviousPage }) => {
  return (
    <i id="arrow-left" className="arrow" onClick={onClickPreviousPage}></i>
  );
};
