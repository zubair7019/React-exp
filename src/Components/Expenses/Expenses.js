import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");

  const filterExpense = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  return (

    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList filterExpense={filterExpense} />
    </Card>

  );
};
export default Expenses;
