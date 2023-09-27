/* eslint-disable react/prop-types */
function History({ transactions, deleteTransaction }) {
  return (
    <div className="mb-10">
      <h2 className="border-b border-gray-400 pb-5 text-2xl mb-8">History</h2>
      {transactions.length > 0 ? (
        <ul className="h-[20vh] overflow-y-scroll">
          {transactions.map((transaction) => {
            return (
              <li
                key={transaction.id}
                className={`group hover:bg-slate-500 border-r-8 border-${
                  +transaction.amount < 0 ? "red" : "green"
                }-500 flex justify-between items-center px-4 py-2 min-h-[40px]`}
              >
                <span>{transaction.description}</span>
                <div className="flex gap-4 items-center">
                  <span>{transaction.amount}</span>
                  <button
                    className="hidden bg-red-800 px-2 py-1 text-white  group-hover:inline"
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="text-center">Add a new transaction!</div>
      )}
    </div>
  );
}

export default History;
