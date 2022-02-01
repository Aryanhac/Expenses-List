import React from 'react';
import NewExpensesForm from './NewExpensesForm';
import './NewExpenses.css';

const NewExpenses = ({func}) => {
  const getForm=(data)=>{
      func(data);
  }
  return (<div>
      <NewExpensesForm  parent={getForm} />
  </div>
  )
};

export default NewExpenses;
