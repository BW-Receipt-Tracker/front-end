import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import { CredentialContext } from './contexts/CredentialContext'

import NavBar from './components/NavBar'
import ValidatedLoginForm from './components/ValidatedLoginForm'
import Register from './components/Register'
import ReceiptsList from './components/ReceiptsList'
import CreateReceipt from './components/CreateReceipt'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: ''
  });
  const [registrationCredentials, setRegistrationCredentials] = useState({
    primaryemail: '',
    username: '',
    password: ''
  });


  return (
    <div>
      <CredentialContext.Provider value={{ loginCredentials, setLoginCredentials, registrationCredentials, setRegistrationCredentials }}>
        <NavBar />

        <Route exact path='/' component={ValidatedLoginForm} />
        <Route path='/login' component={ValidatedLoginForm} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/receipts-list' component={ReceiptsList} />
        <PrivateRoute path='/create-receipt' component={CreateReceipt} />
      </CredentialContext.Provider>
    </div>
  );
}

export default App;