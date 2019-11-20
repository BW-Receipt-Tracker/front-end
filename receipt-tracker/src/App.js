import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import ValidatedLoginForm from './components/ValidatedLoginForm'
import ReceiptsList from './components/ReceiptsList'
import Register from './components/Register'
import CreateNewReceipt from './components/CreateNewReceipt'

function App() {
  
  
  return (
    <div>
      <NavBar />

      <Route 
        exact path="/create-receipt"
        component={CreateNewReceipt}
      />
      <Route 
        path='/login'
        component={ValidatedLoginForm}
      />
      <Route
        path='/register'
        component={Register}
      />
      <Route
        path='/saved-receipts'
        component={ReceiptsList}
      />
    </div>
  );
}

export default App;
