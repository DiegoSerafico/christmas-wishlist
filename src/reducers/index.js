import wishlistReducer from './wishlist-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  wishList: wishlistReducer
});

export default rootReducer;