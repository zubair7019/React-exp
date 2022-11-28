import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {

  // const [enteredTitle,setEnteredTitle]=useState('')
  // const [enteredAmount,setEnteredAmount]=useState('')
  // const [enteredDate,setEnteredDate]=useState('')
 ////////alterantive way for state management//
 const [userInput,setUserInput]=useState({
  eneteredTitle:'',
  enteredAmount:'',
  enteredDate:''
 })
   
    const titleChangeHandler=(event)=>{
        // setEnteredTitle(event.target.value)
        //alternative way//both are fine//
        // setUserInput({
        //   ...userInput,
        //   eneteredTitle:event.target.value
        // })
        setUserInput((prevState)=>{
          return {...prevState,eneteredTitle:event.target.value}
        })
    }
    const amountChangeHandler=(event)=>{
      //  setEnteredAmount(event.target.value)
      // setUserInput({
      //   ...userInput,
      //   eneteredAmount:event.target.value
      // })
      setUserInput((prevState)=>{
        return {...prevState,eneteredAmount:event.target.value}
      })
    }
    const dateChangeHandler=(event)=>{
      //  setEnteredDate(event.target.value)
      // setUserInput({
      //   ...userInput,
      //   eneteredDate:event.target.value
      // })
      setUserInput((prevState)=>{
        return {...prevState,eneteredDate:event.target.value}
      })
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2010-01-01" step="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
