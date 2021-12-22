import React from 'react';
import Wish from './Wish';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function WishList(props) {
  return (
    <React.Fragment>
      <div>
        {Object.values(props.wishList).map((wish) => 
          <Wish
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
}

WishList.propTypes = {
  wishList: PropTypes.object
}

export default WishList
