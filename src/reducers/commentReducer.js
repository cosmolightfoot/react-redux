import { ADD_COMMENT, RMV_COMMENT } from '../actions/commentActions';


export default function commentReducer(state, action) {
  const { index, comment } = action.payload;
  const { postIndex, commentIndex } = action.payload;
  switch(action.type) {
    case ADD_COMMENT: 
      return { ...state, [index]: [
        ...(state[index] || []), comment
      ] };
    
    case RMV_COMMENT: 
      return { ...state, [postIndex]: [
        ...state[postIndex].slice(0, commentIndex), ...state[postIndex].slice(commentIndex + 1)
      ] };

    default: return state;
  }
}
