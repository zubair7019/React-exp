import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  ////////alterantive way for state management//
  //  const [userInput,setUserInput]=useState({
  //   eneteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  //  })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //alternative way//both are fine//
    // setUserInput({
    //   ...userInput,
    //   eneteredTitle:event.target.value
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState,eneteredTitle:event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   eneteredAmount:event.target.value
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState,eneteredAmount:event.target.value}
    // })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   eneteredDate:event.target.value
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState,eneteredDate:event.target.value}
    // })
  };

  const locationChange = (event) => {
    setEnteredLocation(event.target.value);
  };

  
   
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      location:enteredLocation,
    };
    //  console.log(expenseData)
    ///state uplifting from Newexpense through passing the fuction as a props///
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredLocation("")
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2010-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            value={enteredLocation}
            min="2010-01-01"
            step="2022-12-31"
            onChange={locationChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
