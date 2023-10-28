import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import React, {useState} from 'react';

const App = () => {

  const [expenses, setExpenses] = useState([
    {date: new Date(2021, 2, 29), title: 'Car insurance', amount: 294.67, location: 'jaipur'},
    {date: new Date(2021, 4, 6), title: 'jewellery', amount: 2000, location: 'mumbai'},
    {date: new Date(2021, 2, 17), title: 'bike', amount: 3500, location: "delhi"},
    {date: new Date(2021, 8, 4), title: 'shopping', amount: 315.7, location: "paris"},
    {date: new Date(2021, 1, 16), title: 'gift', amount: 20, location: 'new-york'}
  ])

  const deleteExpenseHandler = (title) => {
     // console.log(props.expenses)
     const filteredExpenses = expenses.filter((expense) => expense.title !== title);
     setExpenses(filteredExpenses)
     // console.log(filteredExpenses)
  }

  return (
      <div>
        <h2>Expense Tracker</h2>
        {expenses.map((exp, index) => (
          // key = {index}
          <ExpenseItem
            ExpenseDate = {exp.date}
            ExpenseTitle = {exp.title}
            ExpenseAmount = {exp.amount}
            locationOfExpenditure = {exp.location}
            onDelete = {() => deleteExpenseHandler(exp.title)}
          />
        ))
        }
      </div>  
  );

}



export default App;





{/*in </ExpenseItem>    first letter will be uppercase so that react is able to detect that this is a custom component */ }