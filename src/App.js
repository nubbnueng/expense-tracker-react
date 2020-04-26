import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'

function App() {
  return (
    <div>
      <Header text='Expense Tracker' />
      <div className="Container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
