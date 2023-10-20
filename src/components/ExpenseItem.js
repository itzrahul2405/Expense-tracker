import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';


function ExpenseItem(props) {

  return (
    <div className='expense-item'>
        <ExpenseDate ExpenseDate={props.ExpenseDate}/>
        <ExpenseDetails ExpenseTitle={props.ExpenseTitle} ExpenseAmount={props.ExpenseAmount} locationOfExpenditure={props.locationOfExpenditure}/>

    </div>
  );
}

export default ExpenseItem;
