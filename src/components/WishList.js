import React from 'react';
import Wish from './Wish';
import PropTypes from 'prop-types';

function WishList(props) {
  return (
    <React.Fragment>
      <div>
        {props.wishList.map((wish) => 
          <Wish
          name={wish.name} 
          image={wish.image}
          url={wish.url}
          price={wish.price}
          pintPrice={wish.description}
          />
        )}
      </div>
    </React.Fragment>
  )
}

WishList.propTypes = {
  wishList: PropTypes.array
}

export default WishList
