import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filterYear,setFilterYear]=useState(2022)

  const filterChangeHandler=(selecYear)=>{
   setFilterYear(selecYear)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(item => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        );
      })}
    </Card>
  );
};
export default Expenses;
