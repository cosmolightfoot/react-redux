import lunchReducer from './lunchReducer';
import blogReducer from './postReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  lunchReducer,
  blogReducer
});

