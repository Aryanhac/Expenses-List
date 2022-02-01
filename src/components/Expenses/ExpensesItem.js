import React from 'react';
import ExpensesDate from './ExpensesDate';
import './ExpensesItem.css';
const ExpensesItem = ({ Expensesdata }) => {
  
  return (<>
    
      {
        Expensesdata.map((curEle) => {
          return (
            <>
            <div className="expenses_item">
              {/* <ExpensesDate Date={curEle.date}/> */}
              <div className="expenses_item__description">
                {curEle.title}
              </div>
              <div className="expenses_item__amount">
                {curEle.amount}
              </div>
              </div>
            </>
          )
        })
      }

  
  </>);
};

export default ExpensesItem;
