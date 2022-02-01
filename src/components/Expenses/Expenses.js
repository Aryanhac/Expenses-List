import React from 'react';
import ExpensesItem from './ExpensesItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const getYear =(year)=>{
  console.log(year);
}

const Expenses = ({props}) => {
    
  return (<>
       <div className="Expenses">
       <ExpensesFilter  Year={getYear}/>
      <ExpensesItem Expensesdata={props} />
      </div>
  </>);
};

export default Expenses;
