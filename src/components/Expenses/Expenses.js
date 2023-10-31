import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {


   
    return (
        props.items.map((exp, index) => (
            <ExpenseItem
              key = {exp.id}
              ExpenseDate = {exp.date}
              ExpenseTitle = {exp.title}
              ExpenseAmount = {exp.amount}
              locationOfExpenditure = {exp.location}
              onDelete = {() => props.onDelete(exp.id)}
            />
          ))
        
    )
}

export default Expenses;