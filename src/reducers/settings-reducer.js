/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';

export default (state = { darkMode: true }, action) => {
  switch (action.type) {
  case c.TOGGLE_DARK_MODE:
    return Object.assign({}, state, {
      darkMode: !state.darkMode
    });
  default:
    return state;
  }
};
