import { useParams } from "react-router-dom";

const Bills = () => {
  const params = useParams();
  return <h1>Invoice #{params.invoiceId}</h1>;
};

export default Bills;
