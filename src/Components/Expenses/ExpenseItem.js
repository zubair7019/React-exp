import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
//function delhandler
  const [title,setTitle]=useState(props.title)
  const [amount,setAmount]=useState(0)
  const clickHandler=()=>{
    setTitle("updated")
    console.log("clicked!!!")
  }
  const ChangeAmount=()=>{
  setAmount(amount+1)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler} >Change the Title</button>
      <button onClick={ChangeAmount} >AddAmount</button>
    </Card>
  );
}
export default ExpenseItem;
