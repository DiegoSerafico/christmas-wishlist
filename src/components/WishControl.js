import React from 'react';
import NavBar from './NavBar';

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
      </React.Fragment>
    )
  }
}

export default WishControl
