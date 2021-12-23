import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

  const buttonStyle =
  {  
    display:'block',
    padding:'10px',
    color: props.darkMode ? 'white' : 'black',
    textDecoration:'none',
    border: 'none',
    background: 'none'
  }
  return (
    <ul>
      <li>
        <Link to='/' style={buttonStyle}>Home</Link>
      </li>
      <li>
        <Link to='/wishlist' style={buttonStyle}>My wishlist</Link>
      </li>
      <li>
        <Link to='/login' style={buttonStyle}>Log In</Link>
      </li>
      <li>
        <button onClick={props.toggleDarkMode} style={buttonStyle}>TOGGLE DARK MODE</button>
      </li>
    </ul>
  )
}

export default NavBar
