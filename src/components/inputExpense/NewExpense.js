import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return(
        <div>
            <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler}/>     
            {/* onSaveData name is up to you  */}
        </div>
    )
}


export default NewExpense;