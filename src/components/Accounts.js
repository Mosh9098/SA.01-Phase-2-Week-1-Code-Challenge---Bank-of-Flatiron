import React, { useState } from "react";
import TransactionsList from "./TransactionList";
import Search from "./Search";
import AddTransactionForm from "./AddTransaction";
import transactions from "./data";

function AccountContainer() {
  const [transactionsData, setTransactionsData] = useState(transactions);
  const [query, setQuery] = useState("");

   function fetchTransactions() {
    try {
      const response =  fetch("data.js");
      const data =  response.json();
      setTransactionsData(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }
  
  fetchTransactions();
  
  function handleSearch(e) {
    setQuery(e.target.value);
  }

  function handleAddTransaction(newTransaction) {
    setTransactionsData((prevTransactions) => [...prevTransactions, newTransaction]);
  }

  const filteredTransactions = transactionsData.filter((transaction) =>
    transaction.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;