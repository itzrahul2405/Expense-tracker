import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear() == parseFloat(filteredYear))
   
    return (

      <div>
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          {filteredExpenses.map((exp, index) => (
            <ExpenseItem
              key = {exp.id}
              ExpenseDate = {exp.date}
              ExpenseTitle = {exp.title}
              ExpenseAmount = {exp.amount}
              locationOfExpenditure = {exp.location}
              onDelete = {() => props.onDelete(exp.id)}
            />
          ))
          }
      </div>
        
    )
}

export default Expenses;