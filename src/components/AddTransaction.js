import React, { useState } from "react";

function AddTransaction({ onAddTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      date,
      description,
      category,
      amount: parseFloat(amount),
    };

    onAddTransaction(newTransaction);

    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="table-add">
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <button type="submit" className="addtransaction-button">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;