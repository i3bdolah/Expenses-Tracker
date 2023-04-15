import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const yearChangeHandler = (comingYear) => {
    setYear(comingYear);
  };

  const filterdExpenses = props.data.filter(
    (el) => el.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChange={yearChangeHandler} />

      <ExpensesChart expenses={filterdExpenses} />

      <ExpensesList data={props.data} year={year} />
    </Card>
  );
}

export default Expenses;
