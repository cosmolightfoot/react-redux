import blogReducer from './blogReducer';
import {
  addPost,
  removePost
} from '../actions/postActions';

const state = [];

const statePost = [
  { title: 'Post', body: 'I am Posting' },
  { title: 'Post2', body: 'POST' }
];

describe('blog reducer tests', () => {
  it('adds a post', () => {
    expect(blogReducer(state, addPost('Post', 'I am Posting'))).toEqual([
      {
        title: 'Post',
        body: 'I am Posting'
      }
    ]);
  });
  it('removes a post', () => {
    expect(blogReducer(statePost, removePost(0))).toEqual([{ title: 'Post2', body: 'POST' }]);
  });
});
