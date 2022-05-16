import React, {useState} from "react";
import "./style.css";
import IPAddress from "../Components/IPAddress";
import SearchResult from "../Components/SearchResult";
import RegisterPrinter from "../Components/RegisterPrinter";
import PrintersDetail from "../Components/PrintersDetail";
import {Button} from "@material-ui/core";

const PrinterSearch = () => {
  const [page, setPage] = useState(1);
  const setPagefun = () => {
    if (page === 1) {
      return (
        <>
          <IPAddress setPage={setPage}/>
        </>
      );
    }
    if (page === 2) {
      return (
        <>
          <SearchResult setPage={setPage}/>
        </>
      );
    }
    if (page === 3) {
      return (
        <>
          <RegisterPrinter/>
        </>
      );
    }
    if (page === 4) {
      return (
        <>
          <PrintersDetail/>
        </>
      );
    }
  };
  return (
    <>
      {setPagefun()}
    </>
  );
};

export default PrinterSearch;
