import './ExpenseDate.css'

function ExpenseDate(props){
    const month = props.ExpenseDate.toLocaleDateString('en-US', {month: 'long'});
    const day = props.ExpenseDate.toLocaleDateString('en-US', {day: '2-digit'});
    const year = props.ExpenseDate.getFullYear();

    return(
      <div className="dt">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
    );
}


export default ExpenseDate;