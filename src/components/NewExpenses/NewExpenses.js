import React from 'react';
import NewExpensesForm from './NewExpensesForm';
import './NewExpenses.css';

const NewExpenses = () => {
  const getForm=(data)=>{
      console.log(data);
  }
  return (<div>
      <NewExpensesForm  parent={getForm} />
  </div>
  )
};

export default NewExpenses;
