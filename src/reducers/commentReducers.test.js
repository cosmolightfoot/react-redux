import commentReducer from './commentReducer';
import { addComment, removeComment } from '../actions/commentActions';

describe('comment reducer tests', () => {

  const state = {};
  const stateComments =  { 0: [
    'I am commenting'
  ] };
  const stateMoreComments =  { 0: [
    'I am commenting',
    'still commenting'
  ] };

  it('adds a comment', () => {
    expect(commentReducer(state, addComment(0, 'I am commenting'))).toEqual(stateComments);
  });
  it('adds a comment to a post with a comment', () => {
    expect(commentReducer(stateComments, addComment(0, 'still commenting'))).toEqual(stateMoreComments);
  });
  it('removes a comment', () => {
    expect(commentReducer(stateMoreComments, removeComment(0, 1))).toEqual(stateComments);
  });
});
