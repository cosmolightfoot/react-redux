import {
  ADD_POST,
  RMV_POST
} from '../actions/postActions';

const initialState = [];

export default function blogReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
      
    case RMV_POST:
      return [...state.slice(0, action.payload), ...state.slice((action.payload + 1))];
        
    default: return state;
  }

}
