import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [userInputs, setUserInputs] = useState({
        enteredTitle: '',
        enteredAmmount: '',
        selectedDate: ''
    })

    const onTitleChange = (event) => {
        // setUserInputs({...userInputs,enteredTitle:event.target.value});

        setUserInputs((prevState) => {
            return { ...userInputs, enteredTitle: event.target.value };
        })
    }

    const onAmmountChange = (event) => {
        //setUserInputs({...userInputs,enteredAmmount:event.target.value});

        setUserInputs((prevState) => {
            return { ...userInputs, enteredAmmount: event.target.value };
        })
    }

    const onDateSelect = (event) => {
        //setUserInputs({...userInputs,selectedDate:event.target.value});

        setUserInputs((prevState) => {
            return { ...userInputs, selectedDate: event.target.value };
        })
    }

    const submitHandler = (event) => {

        event.preventDefault();

        if(userInputs.enteredTitle.length ===0)
        {
            alert('Please set title.')
            return;
        }else if(userInputs.enteredAmmount.length ===0)
        {
            alert('Please enter ammount.')
            return;
        }else if(userInputs.selectedDate.length ===0)
        {
            alert('Please select a date.')
            return;
        }

        const expensData = {
            title: userInputs.enteredTitle,
            price: userInputs.enteredAmmount,
            date: new Date(userInputs.selectedDate)
        }

        props.onExpenseDataSave(expensData);
        //console.log(expensData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={onTitleChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Ammount</label>
                    <input type='number' min='0.01' step='0.01' onChange={onAmmountChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={onDateSelect} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm