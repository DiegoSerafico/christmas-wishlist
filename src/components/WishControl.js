import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import NewWishForm from './NewWishForm';
import WishList from './WishList';
import Home from './Home';

class WishControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishList: [
        {
          name: 'Speaker',
          image: 'image',
          url: 'https://google.com',
          price: 100,
          description: 'this good'
        },
        {
          name: 'TV',
          image: 'image',
          url: 'https://google.com',
          price: 1000,
          description: 'this good'
        },
        {
          name: 'Book',
          image: 'image',
          url: 'https://google.com',
          price: 10,
          description: 'this good'
        }
      ]
    }
  }

  handleAddNewWish = (newWish) => {
    const newWishList = this.state.wishList.concat(newWish);
    this.setState({
      wishList: newWishList
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route path='wishlist' element={<WishList wishList={this.state.wishList} />} />
          <Route path='/add' element={<NewWishForm onAddWish={this.handleAddNewWish} />} />
          {/* This route must be last */}
          <Route exact path='/' element={<Home />} />
        </Routes>
      
      </React.Fragment>
    )
  }
}

export default WishControl
