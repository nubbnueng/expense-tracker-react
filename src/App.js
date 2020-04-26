import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { TransactionSummary } from './components/TransactionSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'

function App() {
  return (
    <div>
      <Header text='Expense Tracker' />
      <div className="Container">
        <Balance />
        <TransactionSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
