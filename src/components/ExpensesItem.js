import React from 'react';
import ExpensesDate from './ExpensesDate';
import './ExpensesItem.css';
const ExpensesItem = ({ Expensesdata }) => {
  const clickHandler=(str)=>{
    console.log(str);
  }
  return (<>
    
      {
        Expensesdata.map((curEle) => {
          return (
            <>
            <div className="expenses_item">
              <ExpensesDate Date={curEle.date}/>
              <div className="expenses_item__description">
                {curEle.title}
              </div>
              <div className="expenses_item__amount" onClick={clickHandler("hello")}>
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
