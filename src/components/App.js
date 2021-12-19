import React from 'react';
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import WishControl from './WishControl';

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
