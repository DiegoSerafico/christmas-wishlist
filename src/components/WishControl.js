import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import ReusableForm from './ReusableForm';
import WishDisplay from './WishDisplay';

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
          <Route path='/add' element={<ReusableForm />} />
          {/* This route must be last */}
          <Route exact path='/' element={<WishDisplay />} />
        </Routes>
      
      </React.Fragment>
    )
  }
}

export default WishControl
