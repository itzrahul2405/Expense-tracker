import './ExpenseItem.css';

function ExpenseItem() {
    const ExpenseDate = new Date(2021, 2, 28);
    const ExpenseTitle = 'Car insurance';
    const ExpenseAmount = 294.67;
    const locationOfExpenditure = 'Jaipur';
  return (
    <div className='expense-item'>
        <div>{ExpenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{ExpenseTitle}</h2>
            <div className='expense-item__price'>${ExpenseAmount}</div>
            <div className='expense-item__location'>{locationOfExpenditure}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
