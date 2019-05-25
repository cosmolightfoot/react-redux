import blogReducer from './blogReducer';
import {
  addPost,
  removePost
} from '../actions/postActions';

const state = {
  posts: []
};

const statePost = {
  posts: [
    {
      title: 'Post',
      body: 'I am Posting'
    }
  ]
};

describe('blog reducer tests', () => {
  it('adds a post', () => {
    expect(blogReducer(state, addPost('Post', 'I am Posting'))).toEqual({
      posts: [
        {
          title: 'Post',
          body: 'I am Posting'
        }
      ]
    });
  });
  it('removes a post', () => {
    expect(blogReducer(statePost, removePost('Post', 'I am Posting'))).toEqual({
      posts: []
    });
  });
});
