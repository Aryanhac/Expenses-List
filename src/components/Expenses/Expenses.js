import React from 'react';
import ExpensesItem from './ExpensesItem';
import ExpensesApi from './ExpensesApi';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const getYear =(year)=>{
  console.log(year);
}

const Expenses = () => {
    const [ExpensesApi_data,setExpensesApi_data]=React.useState(ExpensesApi);
    
  return (<>
       <div className="Expenses">
       <ExpensesFilter  Year={getYear}/>
      <ExpensesItem Expensesdata={ExpensesApi_data} />
      </div>
  </>);
};

export default Expenses;
