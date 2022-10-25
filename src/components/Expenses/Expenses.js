import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {

    const [filterYear,setFilterYear] = useState('0');

    const filterExpenses = (filteredYear)=>{
        setFilterYear(filteredYear);
    }

    const filteredExpenses =  props.items.filter(expense=>{
            return filterYear === '0' ? true : (expense.date.getFullYear().toString() === filterYear);
    });

    return (
        <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterExpenses}/>
           {filteredExpenses.length === 0 ? <p>No Expenses Found.</p> :  filteredExpenses.map((expense) => (<ExpenseItem title={expense.title}
                price={expense.price}
                date={expense.date} key={expense.id}
            />))}  
        </Card>
    )
}

export default Expenses