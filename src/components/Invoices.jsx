import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "./data";

const Invoices = () => {
  let invoices = getInvoices();

  return (
    <main className="text-center">
      <div className="flex flex-col gap-3">
        {invoices.map((invoice, index) => (
          <Link
            className="bg-gray-200"
            to={`/invoices/${invoice.number}`}
            key={index}
            target="_blank"
          >
            {invoice.last_name}
          </Link>
        ))}
      </div>
      <Outlet></Outlet>
    </main>
  );
};

export default Invoices;
