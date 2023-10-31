import './App.css';
import Expenses from './components/Expenses/Expenses'
import React, {useState} from 'react';
// import ExpenseForm from './components/inputExpense/ExpenseForm';
import NewExpense from './components/inputExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';

const App = () => {

  const [expenses, setExpenses] = useState([
    {id: '1', date: new Date(2021, 2, 29), title: 'Car insurance', amount: 294.67, location: 'jaipur'},
    {id: '2', date: new Date(2021, 4, 6), title: 'jewellery', amount: 2000, location: 'mumbai'},
    {id: '3', date: new Date(2021, 2, 17), title: 'bike', amount: 3500, location: "delhi"},
    {id: '4', date: new Date(2021, 8, 4), title: 'shopping', amount: 315.7, location: "paris"},
    {id: '5', date: new Date(2021, 1, 16), title: 'gift', amount: 20, location: 'new-york'}
  ])

  const deleteExpenseHandler = (id) => {
     // console.log(props.expenses)
     const filteredExpenses = expenses.filter((expense) => expense.id !== id);
     setExpenses(filteredExpenses)
     // console.log(filteredExpenses)
  }


  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    // console.log(expense)
    const newArr = [expense, ...expenses]                   /* this is for display new expense on screen (in the UI) */
    setExpenses(newArr)
    console.log(newArr) 
  }


  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }


  return (
      <div>
        <h2>Expense Tracker</h2>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <NewExpense onAddExpense={addExpenseHandler}/>      {/* onAddExpense name is up to you following by on */}
        <Expenses items = {expenses} onDelete = {deleteExpenseHandler} />

      </div>  
  );

}



export default App;





{/*in </ExpenseItem>    first letter will be uppercase so that react is able to detect that this is a custom component */ }