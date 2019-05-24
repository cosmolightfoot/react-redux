import { ADD_COMMENT, RMV_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT: {
      const { index, comment } = action.payload;
      return { ...state, [index]: [
        ...(state[index] || []), comment
      ] };
    }
    
    case RMV_COMMENT: {
      const { postIndex, commentIndex } = action.payload;
      return { ...state, [postIndex]: [
        ...state[postIndex].slice(0, commentIndex), ...state[postIndex].slice(commentIndex + 1)
      ] };
    }
    
    default: return state;
  }
}
