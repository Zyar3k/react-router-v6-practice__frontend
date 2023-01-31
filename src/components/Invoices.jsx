import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "./data";

const Invoices = () => {
  let invoices = getInvoices();
  const activeClassName = "text-red-400 bg-gray-200";
  return (
    <main className="text-center">
      <div className="flex flex-col gap-3">
        {invoices.map((invoice, index) => (
          <NavLink
            // style={({ isActive }) => {
            //   return { color: isActive ? "red" : "" };
            // }}
            className={({ isActive }) => (isActive ? activeClassName : "")}
            // className="bg-gray-200"
            to={`/invoices/${invoice.number}`}
            key={index}
          >
            {invoice.last_name}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </main>
  );
};

export default Invoices;
