import React from 'react';
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import WishControl from './WishControl';

/*
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';


var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    // User successfully signed in.
    // Return type determines whether we continue the redirect automatically
    // or whether we leave that to developer to handle.
    return true;
  },
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
});
*/

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <WishControl />
      </div>
    </Router>
  );
}

export default App;
