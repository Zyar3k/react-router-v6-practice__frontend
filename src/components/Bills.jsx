import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "./data";

const Bills = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const invoice = getInvoice(parseInt(params.invoiceId));
  return (
    <main className="flex flex-col py-5 border my-4 w-1/3 mx-auto">
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.first_name} {invoice.last_name} : {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate("/invoices" + location.search);
        }}
      >
        Delete
      </button>
    </main>
  );
};

export default Bills;
