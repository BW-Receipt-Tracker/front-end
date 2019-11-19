import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Login from './components/Login'
import ReceiptsList from './components/ReceiptsList'
import Register from './components/Register'

function App() {
  
  
  return (
    <div>
      <NavBar />

      <Route 
        exact path="/"
        component={HomePage}
      />
      <Route 
        path='/login'
        component={Login}
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
