import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { ContextValue } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
      <ContextValue>
      <App />
   </ContextValue>
  </React.StrictMode>,
  document.getElementById("root")
);
