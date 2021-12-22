import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import NewWishForm from './NewWishForm';
import WishList from './WishList';
import Home from './Home';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from './../actions';

class WishControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  toggleDarkMode = () => {
    const { dispatch } = this.props;
    const action = actions.toggleDarkMode();
    dispatch(action);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route path='wishlist' element={<WishList />} />
          <Route path='/add' element={<NewWishForm />} />
          {/* This route must be last */}
          <Route exact path='/' element={<Home />} />
        </Routes>
      
      </React.Fragment>
    )
  }
}

WishControl.propTypes = {
  settings: PropTypes.object
};

const mapStateToProps = state => {
  return {
    settings: state
  }
}

WishControl = connect(mapStateToProps)(WishControl);

export default WishControl