import { createContext, useState } from "react";
const context = createContext();

const ContextValue = (props) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState({ name: "", status: "" });
  return (
    <context.Provider
      value={{
        rowsPerPage,
        setRowsPerPage,
        setCurrentPage,
        currentPage,
        sort,
        setSort,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export { context, ContextValue };
