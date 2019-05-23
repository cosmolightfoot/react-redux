import { createStore } from 'redux';
import combinedReducers from './reducers/index';

import {
  addChips,
  addDrink,
  addSandwich,
  removeChips,
  removeDrink,
  removeSandwich
} from './actions/lunchActions';

import { addPost, removePost } from './actions/postActions';

const store = createStore(combinedReducers);

store.dispatch(addDrink('coconut lacroix'));

console.log('added drink', store.getState());

store.dispatch(removeDrink('coconut lacroix'));

console.log('removed drink', store.getState());

store.dispatch(addSandwich('bologna sandwich'));

console.log('added sandwich', store.getState());

store.dispatch(addChips('bark chips'));

console.log('added chips', store.getState());

store.dispatch(addChips('chocolate chips'));

console.log('added chips', store.getState());

store.dispatch(removeSandwich('bologna sandwich'));

console.log('remove sandwich', store.getState());

store.dispatch(removeChips('bark chips'));

console.log('remove chips', store.getState());

store.dispatch(addSandwich('knuckle sandwich'));

console.log('add sandwich', store.getState());


