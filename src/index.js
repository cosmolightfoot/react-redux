import { createStore } from 'redux';
import {
  addChips,
  addDrink,
  addSandwich,
  removeChips,
  removeDrink,
  removeSandwich
} from './lunchActions';

export const ADD_DRINK = 'ADD_DRINK';
export const ADD_SANDWICH = 'ADD_SANDWICH';
export const ADD_CHIPS = 'ADD_CHIPS';
export const RMV_DRINK = 'RMV_DRINK';
export const RMV_SANDWICH = 'RMV_SANDWICH';
export const RMV_CHIPS = 'RMV_CHIPS';

const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK: 
      return { ...state, drink: [...state.drink, action.payload] };
    
    case RMV_DRINK: 
      return { ...state, drink: state.drink.filter(drink => drink !== action.payload) };
    
    case ADD_SANDWICH: 
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    
    case RMV_SANDWICH: 
      return { ...state, sandwich: state.sandwich.filter(sandwich => sandwich !== action.payload) };
    
    case ADD_CHIPS: 
      return { ...state, chips: [...state.chips, action.payload] };
    
    case RMV_CHIPS: 
      return { ...state, chips: state.chips.filter(chip => chip !== action.payload) };
    
    default:
      return state;
  }
}

const store = createStore(reducer);

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
