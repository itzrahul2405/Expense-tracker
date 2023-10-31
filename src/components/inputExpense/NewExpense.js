import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
            
        };

        // console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return(
        <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler}/>     
        /* onSaveData name is up to you  */        
    )
}


export default NewExpense;