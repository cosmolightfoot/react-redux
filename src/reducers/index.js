import lunchReducer from './lunchReducer';
import blogReducer from './blogReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  lunchReducer,
  blogReducer
});

