import React from 'react';
import './App.css';

import NavBar from './components/NavBar'

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
