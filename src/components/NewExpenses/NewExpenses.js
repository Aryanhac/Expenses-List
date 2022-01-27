import React from 'react';
import './NewExpenses.css';

const NewExpenses = () => {
  return <div className='NewExpenses_form'>
      <div className='NewExpenses_form__title' className='NewExpenses_form__common'>
          <label>Title:</label>
          <input type="text" placeholder='Enter Title'/>
      </div>
      <div className='NewExpenses_form__amount' className='NewExpenses_form__common'>
           <label>Amount:</label>
          <input type="int" placeholder='Enter Amount' />
      </div>
      <div className='NewExpenses_form_date' className='NewExpenses_form__common'>
           <label>Date:</label>
          <input type="date" placeholder='Enter date'/>
      </div>
      <div className='NewExpenses_form_button' className='NewExpenses_form__common'>
           <button>AddExpense</button>
      </div>

  </div>;
};

export default NewExpenses;
