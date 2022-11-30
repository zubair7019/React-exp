import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
  const expense = [
    {
      id:"01",
      title: "Toilet Paper",
      amount: "123.33",
      date: new Date(2022, 3, 14),
      location: "hyderabad",
    },
    {
      id:"02",
      title: "Contruct building",
      amount: "100.33",
      date: new Date(2021, 9, 7),
      location: "karnatak",
    },
    { 
      id:"03",
      title: "Car insurance",
      amount: "589.33",
      date: new Date(2020, 6, 4),
      location: "Bidar",
    },
    {
      id:"04",
      title: "New desk",
      amount: "149.33",
      date: new Date(2019, 5, 6),
      location: "Bihar",
    },
  ];
  const [val, setVal] = useState(expense);
  const adddexpenseHandler = (exp) => {
    setVal([exp,...val]);
  };

  return (
    <div>
      <NewExpense onAddExpense={adddexpenseHandler} />
      <Expenses items={val} />
    </div>
  );
};

export default App;
