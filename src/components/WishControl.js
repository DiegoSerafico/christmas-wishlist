import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import NewWishForm from './NewWishForm';
import WishDisplay from './WishDisplay';
import Home from './Home';

class WishControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishList: []
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route path='wishlist' element={<WishDisplay />} />
          <Route path='/add' element={<NewWishForm />} />
          {/* This route must be last */}
          <Route exact path='/' element={<Home />} />
        </Routes>
      
      </React.Fragment>
    )
  }
}

export default WishControl
