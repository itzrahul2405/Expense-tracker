import './ExpenseItem.css';

function ExpenseItem(props) {
    // const ExpenseDate = new Date(2021, 2, 29);
    // const ExpenseTitle = 'Car insurance';
    // const ExpenseAmount = 294.67;
    // const locationOfExpenditure = 'Jaipur';
  return (
    <div className='expense-item'>
        <div>{props.ExpenseDate.toLocaleDateString()}</div>
        <div className='expense-item__description'>
            <div>{props.ExpenseTitle}</div>
            <div className='expense-item__price'>${props.ExpenseAmount}</div>
            <div className='expense-item__location'>{props.locationOfExpenditure}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
