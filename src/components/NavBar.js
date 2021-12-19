import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/wishlist'>My wishlist</Link>
      </li>
      <li>
        <Link to='/login'>Log In</Link>
      </li>
    </div>
  )
}

export default NavBar
