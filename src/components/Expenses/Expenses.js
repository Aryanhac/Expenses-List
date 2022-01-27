import React from 'react';
import ExpensesItem from './ExpensesItem';
import ExpensesApi from './ExpensesApi';
import './Expenses.css';


const Expenses = () => {
    const [ExpensesApi_data,setExpensesApi_data]=React.useState(ExpensesApi);
  return (<>
       <div className="Expenses">
      <ExpensesItem Expensesdata={ExpensesApi_data} />
      </div>
  </>);
};

export default Expenses;
