import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/card';
import React from 'react';


const ExpenseItem = (props) => {
  /*  below line can be used in place of line 24 to 28 than we do not need to use props  */
  // const { ExpenseTitle, ExpenseAmount, ExpenseDate, locationOfExpenditure, onDelete} = props;   

  return (
    <Card className='expense-item'>
        <ExpenseDate ExpenseDate={props.ExpenseDate}/>
        <ExpenseDetails ExpenseTitle={props.ExpenseTitle} ExpenseAmount={props.ExpenseAmount} locationOfExpenditure={props.locationOfExpenditure}/>
        <button onClick = {props.onDelete} >DELETE</button>
    </Card>

    // <div className='expense-item'>
    //   <h3>{ExpenseTitle}</h3>
    //   <p>Amount: {ExpenseAmount}</p>
    //   <p>Date: {ExpenseDate.toDateString()}</p>
    //   <p>Location: {locationOfExpenditure}</p>
    //   <button onClick = {onDelete}>DELETE</button>
    // </div>
  );
}

export default ExpenseItem;
