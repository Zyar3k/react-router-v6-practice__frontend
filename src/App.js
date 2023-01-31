import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <nav className="bg-gray-300 flex gap-4">
        <Link to="/invoices">
          <span>Invoices</span>
        </Link>
        <Link to="/expenses">
          <span>Expenses</span>
        </Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
