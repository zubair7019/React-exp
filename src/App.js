import React from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const App=()=> {
  const expense = [
    {
      title: "Toilet Paper",
      amount: "123.33",
      date: new Date(2020, 3, 14),
      location: "hyd",
    },
    {
      title: "Contruct building",
      amount: "100.33",
      date: new Date(2021, 9, 7),
      location: "karnatak",
    },
    {
      title: "Car insurance",
      amount: "589.33",
      date: new Date(2022, 12, 4),
      location: "Bidar",
    },
    {
      title: "New desk",
      amount: "149.33",
      date: new Date(2019, 18, 6),
      location: "Bihar",
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items={expense} />
      
    </div>
  );
}

export default App;
