import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, image, url, price, description, id } = action;
  let newState = { ...state };
  switch (action.type) {
  case c.ADD_WISH_ITEM:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        image: image,
        url: url,
        price: price,
        description: description,
        id: id
      }
    });
  case c.DELETE_WISH_ITEM:
    delete newState[id];
    return newState;
  case c.UPDATE_WISH_ITEM:
    delete newState[id];
    return Object.assign({}, newState, {
      [id]: {
        name: name,
        image: image,
        url: url,
        price: price,
        description: description,
        id: id
      }
    });
  default:
    return state;
  }
};
