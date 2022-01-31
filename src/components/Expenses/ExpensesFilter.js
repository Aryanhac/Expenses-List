import React from 'react';
import './ExpensesFilter.css'
const ExpensesFilter = ({Year}) => {
    const changeYear=(event)=>{
        Year(event.target.value);
    }
  return <div className='ExpensesFilter'>
      <div className='ExpensesFilter_heading'>Filter by year</div>
      <div>
          <select className='ExpensesFilter_options' onChange={changeYear}  >
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
          </select>
      </div>
  </div>;
};

export default ExpensesFilter;
