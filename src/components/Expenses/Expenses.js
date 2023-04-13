import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const yearChangeHandler = (comingYear) => {
    setYear(comingYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChange={yearChangeHandler} />

      <ExpensesList data={props.data} year={year} />
    </Card>
  );
}

export default Expenses;
