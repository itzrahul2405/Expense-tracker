import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/card';
import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter' 


const ExpenseItem = (props) => {
  /*  below line can be used in place of line 24 to 28 than we do not need to use props  */
  // const { ExpenseTitle, ExpenseAmount, ExpenseDate, locationOfExpenditure, onDelete} = props;  
  
  const [title, setTitle] = useState(props.ExpenseTitle);
  /* useState function takes our current value which is props.ExpenseTitle and assign it into title variable (first variable) and update that value using setTitle function */

  const onEdit = () => {
    setTitle('updated !');
    console.log(title)  
  }

  // const [filteredYear, setFilteredYear] = useState('2020')
  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // }

  

  return (
    <Card className='expense-item'>
        <ExpenseDate ExpenseDate={props.ExpenseDate}/>
        <ExpenseDetails ExpenseTitle={title} ExpenseAmount={props.ExpenseAmount} locationOfExpenditure={props.locationOfExpenditure}/>
        <button onClick = {props.onDelete} >DELETE</button>
        <button onClick = {onEdit}>Edit Title</button>
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
