import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const yearChangeHandler = (comingYear) => {
    setYear(comingYear);
  };
  // console.log(year + " FROM EXPENSES.JS!");

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChange={yearChangeHandler} />

      {props.data.map((el) => (
        <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
      ))}
    </Card>
  );
}

export default Expenses;
