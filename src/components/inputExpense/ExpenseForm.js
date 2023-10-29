import './ExpenseForm.css'
import React, { useState } from 'react';

function ExpenseForm(){

    let title;
    let date;
    let amount;
    let location;

    const getTitle = (e) => {
        title = e.target.value
        console.log(title)
    }

    const getDate = (e) => {
        date = e.target.value
    }

    const getAmount = (e) => {
        amount = e.target.value
    }

    const getLocation = (e) => {
        location = e.target.value
    }

    const obj = {
        'title': title,
        'date': date,
        'amount': amount,
        'location': location
    }

    const [val, setVal] = useState(obj)
    const logExpense = () => {
        setVal({
            'title': ' ',
            'date': ' ',
            'amount': ' ',
            'location': ' '
        })
        console.log(val)
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
