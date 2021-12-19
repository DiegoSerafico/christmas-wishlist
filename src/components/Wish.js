import React from 'react';
import PropTypes from 'prop-types';

function Wish(props) {
  const WishCardStyle = {
    width: '275px',
    height: '275px',
    padding: '10px',
    margin: '10px',
    border: '1px grey solid',
    float: 'left'
  }
  return (
    <React.Fragment>
      <div style={WishCardStyle}>
        <h2>{props.name}</h2>
        <hr/>
        <img src={props.image} alt='Product' />
        <a href={props.url}>Sold Here</a>
        <p><strong>Price:</strong> ${props.price}</p>
        <p><strong>Description:</strong> {props.description}</p>
        {/* <button>Add to my list</button> */}
      </div>
    </React.Fragment>
  )
}

Wish.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
}

export default Wish


//boolean for isInMyWishList for add-to button