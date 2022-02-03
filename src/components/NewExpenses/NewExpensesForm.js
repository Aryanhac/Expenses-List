import React,{useState} from 'react';

const NewExpensesForm = (prop) => {
    
    const [newData,setNewData]=useState({title:'',amount:'',date:''});

    const getTitle=(event)=>{
       setNewData((preState)=>{
           return  {...preState,title:event.target.value}
       })
    }

    const getAmount=(event)=>{
        setNewData((preState)=>{
            return  {...preState,amount:event.target.value}
        })
    }

    const getDate=(event)=>{
        setNewData((preState)=>{
            return  {...preState,date:event.target.value}
        })
    }
    const formHandler=(event)=>{
        event.preventDefault();
        const obj={
            ...newData,date:new Date(newData.date),id:Math.random()
        }
        prop.parent(obj);
        setNewData({title:'',amount:'',date:''});
    }
  return <div>
  <form className='NewExpenses_form' onSubmit={formHandler}>
  <div className='NewExpenses_form__title NewExpenses_form__common'>
      <label>Title:</label>
      <input type="text" placeholder='Enter Title' value={newData.title} onChange={getTitle} required/>
  </div>
  <div className='NewExpenses_form__amount NewExpenses_form__common'>
       <label>Amount:</label>
      <input type='number' placeholder='Enter Amount' min='1' value={newData.amount} onChange={getAmount} required/>
  </div>
  <div className='NewExpenses_form_date NewExpenses_form__common'>
       <label>Date:</label>
      <input type="date" placeholder='Enter date' value={newData.date} onChange={getDate} required/>
  </div>
  <div className='NewExpenses_form_button NewExpenses_form__common'>
       <button type='submit'>AddExpense</button>
  </div>
</form>
</div>;
};

export default NewExpensesForm;

// there we can use global variable instead of setnewData but we want clear data after submission that's why we are using useState funciton
