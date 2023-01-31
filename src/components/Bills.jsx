import { useParams } from "react-router-dom";
import { getInvoice } from "./data";

const Bills = () => {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId));
  return (
    <main className="flex flex-col py-5 border my-4 w-1/3 mx-auto">
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.first_name} {invoice.last_name} : {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
};

export default Bills;
