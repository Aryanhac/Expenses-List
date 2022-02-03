import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses"
import './App.css';
import NewExpenses from './components/NewExpenses/NewExpenses';
import ExpensesApi from './ExpensesApi';


function App() {
  const [expenses,setExpense]=useState(ExpensesApi);
  const [tempExpenses,setTempExpenses]=useState(ExpensesApi);
  const getNewData=(data)=>{
    console.log(data);
    setExpense((previousExpense)=>{
      return [data,...previousExpense];
    })
    setTempExpenses((previousExpense)=>{
      return [data,...previousExpense];
    })
  }

  const yearData=(year)=>{
     const newData= tempExpenses.filter((curEle)=>{
        return curEle.date.getFullYear()== year;
     });
     console.log(year);
     console.log(newData);
     setExpense(newData);
  }
 
  return (
    <div className="App">
      <NewExpenses  func={getNewData}/>
      <Expenses props={expenses} yearData={yearData}/>
    </div>
  );
}

export default App;
