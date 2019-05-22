import { createStore } from 'redux';

const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK': 
      return { ...state, drink: [...state.drink, action.payload] };
    
    case 'RMV_DRINK': 
      return { ...state, drink: state.drink.filter(drink => drink !== action.payload) };
    
    case 'ADD_SANDWICH': 
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    
    case 'RMV_SANDWICH': 
      return { ...state, sandwich: state.sandwich.filter(sandwich => sandwich !== action.payload) };
    
    case 'ADD_CHIPS': 
      return { ...state, chips: [...state.chips, action.payload] };
    
    case 'RMV_CHIPS': 
      return { ...state, chips: state.chips.filter(chip => chip !== action.payload) };
    
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'CocoNut LaCroix'
});

console.log('added drink', store.getState());

store.dispatch({
  type: 'RMV_DRINK',
  payload: 'CocoNut LaCroix'
});

console.log('removed drink', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'Bologna Sandwich'
});

console.log('added sandwich', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Bark Chips'
});

console.log('added chips', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Chocolate Chips'
});

console.log('added chips', store.getState());

store.dispatch({
  type: 'RMV_SANDWICH',
  payload: 'Bologna Sandwich'
});

console.log('remove sandwich', store.getState());

store.dispatch({
  type: 'RMV_CHIPS',
  payload: 'Bark Chips'
});

console.log('remove chips', store.getState());
