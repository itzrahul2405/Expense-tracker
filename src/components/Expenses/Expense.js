import ExpenseItem from "./ExpenseItem";
import React, { Component } from 'react'


const Expense = (props) => {
  return (
    <div>
      {props.expenses.map((exp, index) => (
        // key = {index}
        <ExpenseItem
          ExpenseDate={exp.date}
          ExpenseTitle={exp.title}
          ExpenseAmount={exp.amount}
          locationOfExpenditure={exp.location}
          onDelete={() => deleteExpenseHandler(exp.title)}
        />
      ))}
    </div>
  );
};

export default Expense;
