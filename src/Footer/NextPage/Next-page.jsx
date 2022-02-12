import { useEffect,useState } from "react";
import "./Style-next-page.css";

function NextPage({onclick}) {
  return (
    <a>
      <i id="arrow-right" className="arrow-2" onClick={onclick}></i>
    </a>
  );
}
export default NextPage;
