/* eslint-disable react/prop-types */
function Balance({ transactions }) {
  const balance = transactions.reduce(
    (acc, { amount }) => {
      if (amount > 0) acc.income += +amount;
      else acc.expence += +amount;
      acc.total += +amount;
      return acc;
    },
    { income: 0, expence: 0, total: 0 }
  );

  return (
    <div className="mb-10">
      <h2 className=" uppercase text-left">Your Balance</h2>
      <h3 className="text-4xl font-mono mb-4">${balance.total}</h3>

      <div className="grid grid-cols-2 text-center bg-white shadow-md px-6 py-3">
        <div className=" border-r-2">
          <h4 className="uppercase">income</h4>
          <p>${balance.income}</p>
        </div>
        <div>
          <h4 className="uppercase">expense</h4>
          <p>${balance.expence}</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
