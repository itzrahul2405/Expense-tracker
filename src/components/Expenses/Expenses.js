import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear() == parseFloat(filteredYear))

  

//     return (

//       <div>
//           <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

//           {/* this is first way to render conditional statement */}

//           {/* {filteredExpenses.length === 0 ? (
//             <p>No Expenses Found.</p>
//           ) : (
//             filteredExpenses.map((exp, index) => (
//             <ExpenseItem
//               key = {exp.id}
//               ExpenseDate = {exp.date}
//               ExpenseTitle = {exp.title}
//               ExpenseAmount = {exp.amount}
//               locationOfExpenditure = {exp.location}
//               onDelete = {() => props.onDelete(exp.id)}
//             />
//           ))
//           )
//           } */}






//           {/* this is second way to render conditional statement ( it checks condition and if it is true it render part after && )*/}

//           {filteredExpenses.length === 0 && <p>No Expenses Found.</p> }
//           {filteredExpenses.length > 0 && 
//             filteredExpenses.map((exp, index) => (
//             <ExpenseItem
//               key = {exp.id}
//               ExpenseDate = {exp.date}
//               ExpenseTitle = {exp.title}
//               ExpenseAmount = {exp.amount}
//               locationOfExpenditure = {exp.location}
//               onDelete = {() => props.onDelete(exp.id)}
//             />
//           ))
//           } 
//       </div>
        
//     )
// }





    // this is the third way to render conditional statement

    let expensesContent = <p>No Expenses Found.</p>

    if (filteredExpenses.length  > 0 ){
      expensesContent = filteredExpenses.map((exp, index) => (
      <ExpenseItem
        key = {exp.id}
        ExpenseDate = {exp.date}
        ExpenseTitle = {exp.title}
        ExpenseAmount = {exp.amount}
        locationOfExpenditure = {exp.location}
        onDelete = {() => props.onDelete(exp.id)}
      />
      ))

      if (filteredExpenses.length === 1){
        expensesContent = [...expensesContent , <p>Only single Expense here. Please add more...</p>]
      }    
    }

    // if (filteredExpenses.length === 1){
    //   expensesContent = [...expensesContent , <p>Only single Expense here. Please add more...</p>]
    // }


    return (

      <div>
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          {expensesContent}    
      </div>
        
    )
}









export default Expenses;