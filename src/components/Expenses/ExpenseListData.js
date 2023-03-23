import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseListData.css";

const ExpenseListData = (props) => {
  const noExpenseMessage = (
    <h2 className="expenses-list__fallback">Found no expenses.</h2>
  );

  const expensesContent = (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );

  let content = props.items.length === 0 ? noExpenseMessage : expensesContent;

  return content;
};

export default ExpenseListData;
