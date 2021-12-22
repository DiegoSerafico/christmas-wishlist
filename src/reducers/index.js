import settingsReducer from './settings-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  settings: settingsReducer,
  firestore: firestoreReducer
});

export default rootReducer;