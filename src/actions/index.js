import * as c from './ActionTypes';

export const deleteWishItem = id => ({
  type: c.DELETE_WISH_ITEM,
  id
});

export const addWishItem = (wishItem) => {
  const { name, image, url, price, description, id } = wishItem;

  return {
    type: c.ADD_WISH_ITEM,
    name: name,
    image: image,
    url: url,
    price: price,
    description: description,
    id: id
  }
};

export const updateWishItem = (wishItem) => {
  const { name, image, url, price, description, id } = wishItem;

  return {
    type: c.UPDATE_WISH_ITEM,
    name: name,
    image: image,
    url: url,
    price: price,
    description: description,
    id: id
  }
};