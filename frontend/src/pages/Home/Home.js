import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import MonthlyExpense from "../../components/MonthlyExpense/MonthlyExpense";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import "./Home.css";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});
  const [expense, setExpense] = useState([]);

  const fetchTransactions = async () => {
    try {
      const token = Cookies.get("token");
      const res = await fetch("http://localhost:5000/transaction", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data, monthlyExpense } = await res.json();
      setTransactions(data);
      setExpense(monthlyExpense);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <TransactionForm
        fetchTransactions={fetchTransactions}
        editTransaction={editTransaction}
      />
      <MonthlyExpense expense={expense} />
      <TransactionsList
        transactions={transactions}
        fetchTransactions={fetchTransactions}
        setEditTransaction={setEditTransaction}
      />
    </>
  );
};

export default Home;
