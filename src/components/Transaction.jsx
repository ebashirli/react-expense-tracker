import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line react/prop-types
function Transaction({ handleAddTransaction }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSetAmount(e) {
    setAmount(+e.target.value);
  }
  function handleSetDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    if (!description || !amount) return;
    e.preventDefault();
    handleAddTransaction({ id: uuidv4(), description, amount });
    setAmount("");
    setDescription("");
    inputRef.current.focus();
  }

  return (
    <div className="flex flex-col">
      <h2 className="border-b border-gray-400 pb-5 text-2xl mb-8">
        Add new transaction
      </h2>
      <div className="">
        <form className="flex flex-col  m-auto  justify-center gap-2">
          <label htmlFor="description">Text</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleSetDescription}
            ref={inputRef}
            required={true}
          />
          <label htmlFor="amount" className="flex flex-col">
            <span>Amount</span>
            <span>(negative - expence, positive - income)</span>
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleSetAmount}
            className="mb-5"
            required
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 py-3 text-white"
          >
            Add transaction
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transaction;
