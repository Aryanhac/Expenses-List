import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses"
import './App.css';
import NewExpenses from './components/NewExpenses/NewExpenses';
import ExpensesApi from './ExpensesApi';


function App() {
  const [expenses,setExpense]=useState(ExpensesApi);
  const getNewData=(data)=>{
    console.log(data);
    setExpense((previousExpense)=>{
      return [data,...previousExpense];
    })
  }
 
  return (
    <div className="App">
      <NewExpenses  func={getNewData}/>
      <Expenses props={expenses}/>
    </div>
  );
}

export default App;
