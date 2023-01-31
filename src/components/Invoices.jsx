import React from "react";
import { Outlet } from "react-router-dom";

const Invoices = () => {
  return (
    <div className="text-center">
      <h1>Invoices</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Invoices;
