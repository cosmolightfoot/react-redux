import {
  ADD_POST,
  RMV_POST
} from '../actions/postActions';

const initialState = {
  posts: []
};

export default function blogReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
      
    case RMV_POST:
      return { ...state, posts: state.posts.filter(post => post.title !== action.payload.title) };
        
    default: return state;
  }

}
