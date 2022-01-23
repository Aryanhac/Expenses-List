import React from 'react';
import './ExpensesItem.css';
const ExpensesItem = () => {
  return (<>
      <div className="expenses_item">
          <div className="expenses_item__date">
                 14 May 2020
          </div>
          <div className="expenses_item__description">
                 car
          </div>
          <div className="expenses_item__amount">
                Rs. 10000
          </div>
      </div>
  </>);
};

export default ExpensesItem;
