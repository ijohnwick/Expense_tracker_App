import React from 'react';
import "./App.css"
import Header from './Components/Header';
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpense'
import TransactionsList from './Components/TransactionsList';
import AddTransactions from './Components/AddTransactions';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
   <GlobalProvider>
    <Header> </Header>
    <div className="container">
      <Balance></Balance>
      <IncomeExpense></IncomeExpense> 
    </div>
    <TransactionsList></TransactionsList>
    <AddTransactions></AddTransactions>
    
   </GlobalProvider>

  );
}

export default App;
