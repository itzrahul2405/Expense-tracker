import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {


   
    return (
        props.items.map((exp, index) => (
            // key = {index}
            <ExpenseItem
              ExpenseDate = {exp.date}
              ExpenseTitle = {exp.title}
              ExpenseAmount = {exp.amount}
              locationOfExpenditure = {exp.location}
              onDelete = {() => props.onDelete(exp.title)}
            />
          ))
        
    )
}

export default Expenses;