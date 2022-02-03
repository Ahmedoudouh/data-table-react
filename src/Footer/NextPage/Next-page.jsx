import { useEffect,useState } from "react";
import "./Style-next-page.css";

function NextPage({Onclick}) {
  const handleClick = () => {
    Onclick();
  };

  return (
    <a>
      <i id="arrow-right" className="arrow-2" onClick={handleClick}></i>
    </a>
  );
}
export default NextPage;
