import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {

  const expenseDataSaveHandler = (newExpenseData)=>{
       const expenseData = {
        ...newExpenseData,
        id:Math.random().toString()
       }

      props.onNewExpenseData(expenseData);
  } 

  return (
    <div className='new-expense'>
        <ExpenseForm onExpenseDataSave={expenseDataSaveHandler}/>
    </div>
  )
}

export default NewExpense