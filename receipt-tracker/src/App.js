import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Login from './components/Login'
import ReceiptsList from './components/ReceiptsList'

function App() {
  
  
  return (
    <div>
      <NavBar />

      <Route 
        exact path="/"
      />
      <Route 
        path='/login'
        component={Login}
      />
      <Route
        path='/saved-receipts'
        component={ReceiptsList}
      />
    </div>
  );
}

export default App;
