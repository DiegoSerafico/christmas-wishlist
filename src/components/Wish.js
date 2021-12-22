import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function Wish(props) {

  const firestore = useFirestore();

  const WishCardStyle = {
    width: '275px',
    height: '275px',
    padding: '10px',
    margin: '10px',
    border: '1px grey solid',
    float: 'left'
  }

  const imageStyle = {
    width: 'auto',
    height: 'auto',
    maxWidth: 100,
    maxHeight: 100
  }

  function deleteItem(e) {
    e.preventDefault();
    console.log('You clicked deleteItem. ' + props.id);
    firestore.delete({collection: 'wishItems', doc: props.id});
  }

  return (
    <React.Fragment>
      <div style={WishCardStyle}>
        <h2>{props.name}</h2>
        <button onClick={deleteItem}>
          X 
        </button>
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string
}

export default Wish


//boolean for isInMyWishList for add-to button