import React, { useState } from 'react';

const ExpenseDetails = (props) => {

  const [amount, setAmount] = useState(props.ExpenseAmount)
  const updateExpense = () => {
    setAmount(100)
  }

    return(
      <div className='expense-item__description'>
        <div>{props.ExpenseTitle}</div>
        <div className='expense-item__price'>${amount}</div>
        <button onClick = {updateExpense}>Change Expense</button>
        <div className='expense-item__location'>{props.locationOfExpenditure}</div>
      </div>
    )
}


export default ExpenseDetails;