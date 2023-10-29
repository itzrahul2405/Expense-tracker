import './ExpenseForm.css'
import React, { useState } from 'react';

function ExpenseForm(){

    let a;

    const [enteredTitle, setEnteredTitle] = useState('')         /* phle enteredTitle empty h fir setEnteredTitle isme entered value (e.target.value) set krta h */
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredLocation, setEnteredLocation] = useState('')

    const getTitle = (e) => {
        // a = e.target.value
        // console.log('temp', a)                  /* if we direct assign value (e.target.value) into variable a and console it, this will work synchronously but if we use state it will work asynchronously (bit late) */

        setEnteredTitle(e.target.value)
        console.log(enteredTitle)
        
    }

    const getDate = (e) => {
        setEnteredDate(e.target.value)
        // console.log(enteredDate)
    }

    const getAmount = (e) => {
        setEnteredAmount(e.target.value)
        // console.log(enteredAmount)
    }

    const getLocation = (e) => {
        setEnteredLocation(e.target.value)
        // console.log(enteredLocation)
    }

    const myObj = {
        'title': enteredTitle,
        'date': enteredDate,
        'amount': enteredAmount,
        'location': enteredLocation
    }

    const [obj, setObj] = useState(myObj)
    const logExpense = () => {
        setObj({
            'title': ' ',
            'date': ' ',
            'amount': ' ',
            'location': ' '
        })
        console.log(obj)
    }

    return (

        <form id='form'>
            <div>
                <label htmlFor='title'>Enter Title:</label>
                <input type="text" className='form-input' id='title' name='title' onChange={getTitle}></input>
            </div>

            <div>
                <label htmlFor='date'>Enter Date:</label>
                <input type="date" className='form-input' id='date' name='date' onChange={getDate}></input>
            </div>

            <div>
                <label htmlFor='amount'>Enter Amount:</label>
                <input type="text" className='form-input' id='amount' name='amount' onChange={getAmount}></input>
            </div>

            <div>
                <label htmlFor='location'>Enter location:</label>
                <input type="text" className='form-input' id='location' name='location' onChange={getLocation}></input>
            </div>
            <button id='form-btn' onClick={logExpense}>Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
