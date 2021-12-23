import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import NewWishForm from './NewWishForm';
import WishList from './WishList';
import Home from './Home';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from './../actions';
import Snowfall from 'react-snowfall';
import Header from './Header';

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

    const bodyStyle = {
      backgroundColor: this.props.settings.darkMode ?  '#000814' : 'white',
      width: '100%',
      height: '100%'
    }

    let snowColor = this.props.settings.darkMode ? 'white' :'#ADD8E6';
    return (
      <React.Fragment>
        <div style={bodyStyle}>
        <Header darkMode={this.props.settings.darkMode}/>
        <Snowfall color={snowColor}/>
        <NavBar toggleDarkMode={this.toggleDarkMode} darkMode={this.props.settings.darkMode}/>
        <Routes>
          <Route path='wishlist' element={<WishList darkMode={this.props.settings.darkMode}/>} />
          <Route path='/add' element={<NewWishForm />} />
          {/* This route must be last */}
          <Route exact path='/' element={<Home />} />
        </Routes>
        </div>
      
      </React.Fragment>
    )
  }
}

WishControl.propTypes = {
  settings: PropTypes.object
};

const mapStateToProps = state => {
  return {
    settings: state.settings
  }
}

WishControl = connect(mapStateToProps)(WishControl);

export default WishControl