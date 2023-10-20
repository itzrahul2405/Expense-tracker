const ExpenseDetails = (props) => {
    return(
      <div className='expense-item__description'>
        <div>{props.ExpenseTitle}</div>
        <div className='expense-item__price'>${props.ExpenseAmount}</div>
        <div className='expense-item__location'>{props.locationOfExpenditure}</div>
      </div>
    )
}


export default ExpenseDetails;