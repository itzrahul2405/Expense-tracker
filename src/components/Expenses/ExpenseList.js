import './ExpenseList.css' 
import ExpenseItem from './ExpenseItem'



const ExpenseList = (props) => {

    let expensesContent = <p>No Expenses Found.</p>

    if (props.items.length  > 0 ){
      expensesContent = props.items.map((exp, index) => (
      <ExpenseItem
        key = {exp.id}
        ExpenseDate = {exp.date}
        ExpenseTitle = {exp.title}
        ExpenseAmount = {exp.amount}
        locationOfExpenditure = {exp.location}
        onDelete = {() => props.onDelete(exp.id)}
      />
      ))

      if (props.items.length === 1){
        expensesContent = [...expensesContent , <p>Only single Expense here. Please add more...</p>]
      }    
    }

    // if (filteredExpenses.length === 1){
    //   expensesContent = [...expensesContent , <p>Only single Expense here. Please add more...</p>]
    // }


    return (
        <ul className='expense-list'>
            {expensesContent}
        </ul>
    );
}


export default ExpenseList;
