import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { getInvoices } from "./data";

const Invoices = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let invoices = getInvoices();
  const activeClassName = "text-red-400 bg-gray-200";

  function onInputChange(e) {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }
  return (
    <main className="text-center">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="border w-3/4 mx-auto mt-5"
          placeholder="Search Invoice"
          value={searchParams.get("filter") || ""}
          onChange={onInputChange}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.last_name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice, index) => (
            <ResultNavLink
              className={({ isActive }) => (isActive ? activeClassName : "")}
              to={`/invoices/${invoice.number}`}
              key={index}
            >
              {invoice.last_name}
            </ResultNavLink>
          ))}
      </div>
      <Outlet></Outlet>
    </main>
  );
};

const ResultNavLink = ({ to, ...props }) => {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props}></NavLink>;
};

export default Invoices;
