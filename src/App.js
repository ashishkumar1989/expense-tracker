import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const DUMMY_DATA = [{ id: 'e1',title: 'new apple watch', price: '3000', date: new Date(2022, 2, 28) },
                    { id: 'e2',title: 'new tv', price: '43000', date: new Date(2021, 11, 24) },
                    { id: 'e3',title: 'Card Inssurance', price: '3000', date: new Date(2019, 6, 17) },
                    { id: 'e4',title: 'new macbook', price: '120000', date: new Date(2019, 8, 5) }];

   const [expenses,setExpenses] = useState(DUMMY_DATA);

  const newExpenseDataHandler = (expenseData) =>{
     setExpenses([expenseData,...expenses]);
  }                  

  return (
    <div>
       <NewExpense onNewExpenseData={newExpenseDataHandler}/>
       <Expenses items={expenses} />
    </div>
  );
}

export default App;
