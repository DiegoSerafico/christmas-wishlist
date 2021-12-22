import settingsReducer from '../../reducers/settings-reducer';
import * as c from '../../actions/ActionTypes';

describe('settingsReducer', () => {

  let action;

  const currentState = {
    darkMode: true
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(settingsReducer({darkMode: false}, { type: null })).toEqual({darkMode: false});
  });

  test('Should successfully toggle dark mode', () => {
    action = {
      type: c.TOGGLE_DARK_MODE
    };

    expect(settingsReducer({}, action)).toEqual({
      darkMode: true
    });
  });
});