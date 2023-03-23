import ExpenseListData from "./ExpenseListData";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function ExpenseList(props) {
  const [yearFilter, setYearFilter] = useState(2020);

  const yearFilterChangeHandler = (updatedYearFilter) => {
    setYearFilter(updatedYearFilter);
  };

  const filteredExpenses =
    props.data == null ||
    props.data.filter((expense) => {
      return +expense.date.getFullYear() === +yearFilter;
    });

  return (
    <div>
      {props.data == null ? "a" : "b"}
      <Card className="expenses">
        <ExpenseFilter
          selectedYearFilter={yearFilter}
          onYearFilterChange={yearFilterChangeHandler}
        />
        <ExpenseListData items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default ExpenseList;
