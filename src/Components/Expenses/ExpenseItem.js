import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
  //function delhandler
  
  const clickHandler = () => {
    setTitle("updated");
  };
  const ChangeAmount = () => {
    setAmount(455)
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change the Title</button>
      <button onClick={ChangeAmount}>AddAmount</button>
    </Card>
  );
};
export default ExpenseItem;
