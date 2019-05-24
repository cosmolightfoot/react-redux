import comments from './commentReducer';
import posts from './postReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  comments,
  posts
});

