import { useEffect, useState } from "react";
import Balance from "./components/Balance";
import History from "./components/History";
import Transaction from "./components/Transaction";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) setTransactions(storedTransactions);
  }, []);

  function handleAddTransaction(transaction) {
    setTransactions((ts) => {
      const newTransactions = [...ts, transaction];
      localStorage.setItem("transactions", JSON.stringify(newTransactions));
      return newTransactions;
    });
  }

  function handleDeleteTransaction(id) {
    setTransactions((ts) => {
      const newTransactions = ts.filter((t) => t.id !== id);
      localStorage.setItem("transactions", JSON.stringify(newTransactions));
      return newTransactions;
    });
  }

  return (
    <div className="h-screen font-bold  bg-gray-300 py-5 ">
      <div className="w-1/3 max-h-5/6 m-auto">
        <h1 className="text-2xl mb-10 text-center">Expense Tracker</h1>

        <Balance transactions={transactions} />
        <History
          transactions={transactions}
          deleteTransaction={handleDeleteTransaction}
        />
        <Transaction
          transactions={transactions}
          handleAddTransaction={handleAddTransaction}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;
