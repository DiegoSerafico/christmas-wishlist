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

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = actions.deleteWishItem(id);
    dispatch(action);
  }

  handleEditingItemInWishlist = (itemToEdit) => {
    const { dispatch } = this.props;
    const action = actions.updateWishItem(itemToEdit)
    dispatch(action);
  }

  handleAddingNewItemToWishlist = (newItem) => {
    const { dispatch } = this.props;
    const action = actions.addWishItem(newItem);
    dispatch(action);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route path='wishlist' element={<WishList wishList={this.props.wishList} />} />
          <Route path='/add' element={<NewWishForm onAddWish={this.handleAddingNewItemToWishlist} />} />
          {/* This route must be last */}
          <Route exact path='/' element={<Home />} />
        </Routes>
      
      </React.Fragment>
    )
  }
}

WishControl.propTypes = {
  wishList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    wishList: state
  }
}

WishControl = connect(mapStateToProps)(WishControl);

export default WishControl