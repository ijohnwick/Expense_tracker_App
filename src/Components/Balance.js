import React, { useContext } from 'react'
import './components.css'
import { GlobalContext } from '../context/GlobalState'
const Balance = () => {
  const {transactions}=useContext(GlobalContext)
  const amounts =transactions.map(transaction=>(transaction.amount));
  const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const sign=total<0?"-":"+";
  return (
    
    <div>
       <h4>Your Balance</h4>
       <h1 id="balance"  className={total<0?"minus":"plus"}><span>{sign}${total}</span></h1>
    </div>
  )
}

export default Balance
