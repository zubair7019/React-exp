import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  return (
    <Card className="expenses">
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
