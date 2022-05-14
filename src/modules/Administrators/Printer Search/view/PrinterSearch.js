import React, { useState } from "react";
import "./style.css";
import IPAddress from "../Components/IPAddress";
import SearchResult from "../Components/SearchResult";
import RegisterPrinter from "../Components/RegisterPrinter";
import PrintersDetail from "../Components/PrintersDetail";
import { Button } from "@material-ui/core";

const PrinterSearch = () => {
  const [page, setPage] = useState(1);
  const setPagefun = () => {
    if (page === 1) {
      return (
        <>
          <IPAddress />
        </>
      );
    }
    if (page === 2) {
      return (
        <>
          <SearchResult />
        </>
      );
    }
    if (page === 3) {
      return (
        <>
          <RegisterPrinter />
        </>
      );
    }
    if (page === 4) {
      return (
        <>
          <PrintersDetail />
        </>
      );
    }
  };
  return (
    <>
      {setPagefun()}
      <Button onClick={()=>{setPage(1)}} variant="contained" color="primary" style={{ margin: "10px" }}>
        Page 1
      </Button>
      <Button onClick={()=>{setPage(2)}} variant="contained" color="primary" style={{ margin: "10px" }}>
        Page 2
      </Button>
      <Button onClick={()=>{setPage(3)}} variant="contained" color="primary" style={{ margin: "10px" }}>
        Page 3
      </Button>
      <Button onClick={()=>{setPage(4)}} variant="contained" color="primary" style={{ margin: "10px" }}>
        Page 4
      </Button>
    </>
  );
};

export default PrinterSearch;
