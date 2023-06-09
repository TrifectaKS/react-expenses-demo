import { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2019, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const newExpenseAddedHandler = (data) => {
    setExpenses((previousExpenses) => {
      return [data, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onNewExpenseAdded={newExpenseAddedHandler} />
      <ExpenseList data={expenses}></ExpenseList>
    </div>
  );
}

export default App;
