import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const filterdExpenses = props.data.filter(
    (el) => el.date.getFullYear().toString() === props.year
  );

  return (
    <div>
      {filterdExpenses.length === 0 ? (
        <h2 className="expenses-list__fallback">No Content Found.</h2>
      ) : (
        filterdExpenses.map((el) => (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        ))
      )}
    </div>
  );
};

export default ExpensesList;
