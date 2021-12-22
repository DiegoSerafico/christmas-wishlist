import wishlistReducer from '../../reducers/wishlist-reducer';
import * as c from '../../actions/ActionTypes';

describe('wishlistReducer', () => {

  let action;
  const wishItem =
  {
    name: 'TV',
    image: 'https://target.scene7.com/is/image/Target/GUEST_8926bf80-0d7b-43da-b4b2-249bfb07578b?fmt=webp&wid=1400&qlt=80',
    url: 'https://www.target.com/p/element-65-34-4k-uhd-roku-tv/-/A-79853886#lnk=sametab',
    price: 499.99,
    description: 'I want it to be a smart TV please',
    id: 1
  }

  const currentState = {
    1: 
    {
      name: 'TV',
      image: 'tv.png',
      url: 'amazon.com/tv',
      price: 1000,
      description: 'A smart TV',
      id: 1   
    },
    2: 
    {
      name: 'Car',
      image: 'car.png',
      url: 'amazon.com/car',
      price: 30000,
      description: 'A cool one',
      id: 2 
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(wishlistReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new wish item data to wish list', () => {
    const { name, image, url, price, description, id } = wishItem;
    action = {
      type: c.ADD_WISH_ITEM,
      name: name,
      image: image,
      url: url,
      price: price,
      description: description,
      id: id
    };

    expect(wishlistReducer({}, action)).toEqual({
      [id] : {
        name: name,
        image: image,
        url: url,
        price: price,
        description: description,
        id: id
      }
    });
  });

  test('Should successfully delete a wishlist item', () => {
    action = {
      type: c.DELETE_WISH_ITEM,
      id: 1
    };
    expect(wishlistReducer(currentState, action)).toEqual({
      2: 
      {
        name: 'Car',
        image: 'car.png',
        url: 'amazon.com/car',
        price: 30000,
        description: 'A cool one',
        id: 2 
      }
    });
  });

  test('Should successfully update a wishlist item', () => {
    const { name, image, url, price, description, id } = wishItem;
    action = {
      type: c.UPDATE_WISH_ITEM,
      name: name,
      image: image,
      url: url,
      price: price,
      description: description,
      id: id
    };
    expect(wishlistReducer(currentState, action)).toEqual({
      1: 
      {
        name: 'TV',
        image: 'https://target.scene7.com/is/image/Target/GUEST_8926bf80-0d7b-43da-b4b2-249bfb07578b?fmt=webp&wid=1400&qlt=80',
        url: 'https://www.target.com/p/element-65-34-4k-uhd-roku-tv/-/A-79853886#lnk=sametab',
        price: 499.99,
        description: 'I want it to be a smart TV please',
        id: 1 
      },
      2: 
      {
        name: 'Car',
        image: 'car.png',
        url: 'amazon.com/car',
        price: 30000,
        description: 'A cool one',
        id: 2 
      }
    });
  });
});