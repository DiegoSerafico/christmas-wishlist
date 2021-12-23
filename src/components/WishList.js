import React from 'react';
import Wish from './Wish';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function WishList(props) {

  useFirestoreConnect([
    { collection: 'wishItems' }
  ]);

  const wishlist = useSelector(state => state.firestore.ordered.wishItems);

  console.log(wishlist);

  if (isLoaded(wishlist)) {
    return (
      <React.Fragment>
        <div>
          {Object.entries(wishlist).map(([id, wish]) => 
            <Wish darkMode={props.darkMode}
            name={wish.name} 
            image={wish.image}
            url={wish.url}
            price={wish.price}
            description={wish.description}
            id={wish.id}
            key={wish.id}
            />
          )}
          <Link to='/add' >Add Item</Link>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default WishList
