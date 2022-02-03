import React from 'react';
import ExpensesItem from './ExpensesItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';



const Expenses = ({props,yearData}) => {

  const getYear =(year)=>{
     yearData(year);
  }
  return (<>
       <div className="Expenses">
      <ExpensesFilter  Year={getYear}/>
      <ExpensesItem Expensesdata={props} />
      </div>
  </>);
};

export default Expenses;
