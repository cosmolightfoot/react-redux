import {
  ADD_CHIPS,
  ADD_DRINK,
  ADD_SANDWICH,
  RMV_CHIPS,
  RMV_DRINK,
  RMV_SANDWICH
} from '../actions/lunchActions';

const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

export default function lunchReducer(state = initialState, action) {
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
