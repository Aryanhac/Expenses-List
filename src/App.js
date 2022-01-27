import React from 'react';
import Expenses from "./components/Expenses/Expenses"
import './App.css';
import NewExpenses from './components/NewExpenses/NewExpenses';

function App() {
  return (
    <div className="App">
      <NewExpenses/>
      <Expenses/>
    </div>
  );
}

export default App;
