import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth } from 'aws-amplify'
import {
  withAuthenticator,
  AmplifySignOut
} from '@aws-amplify/ui-react'

function App() {
  console.log(Auth)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AWS AMPLIFY TESTING
        </p>
      </header>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App)
