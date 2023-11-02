import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
            
        };

        // console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing(false)                 /* it will work while submit */
    }


    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return(
        <div>
            {!isEditing && <div className='newExpense-btn-container'><button id='newExpense-btn' onClick={startEditingHandler} >Add New Expense</button></div>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>     /* onSaveData name is up to you  */}       
        </div>
    )
}


export default NewExpense;