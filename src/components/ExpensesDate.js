import React from 'react';
import './ExpensesDate.css';

const ExpensesDate = ({Date}) => {
      const month=Date.toLocaleString('en-US',{month:'long'});
      const day=Date.toLocaleString('en-US',{day:'2-digit'});
      const year=Date.getFullYear();
  return <div>
        <div className="expenses_item__date">
               <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
              </div>
  </div>;
};

export default ExpensesDate;
