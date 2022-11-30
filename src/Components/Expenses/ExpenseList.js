import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ filterExpense }) => {
  return (
    <ul className="expenses-list">
      {(filterExpense.length === 0 && <p>No expense found</p>) ||
        (filterExpense.length === 1 && (
          <p>Only single Expense here. please add more....</p>
        ))}
      {filterExpense.length > 0 &&
        filterExpense.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
              location={item.location}
            />
          );
        })}
    </ul>
  );
};

export default ExpenseList;
