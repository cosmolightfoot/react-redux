import { addComment, ADD_COMMENT, removeComment, RMV_COMMENT } from './commentActions';

describe('comment actions tests', () =>{
  it('add comment action', () => {
    expect(addComment(0, 'this is a comment')).toEqual({
      type: ADD_COMMENT, payload: { index: 0, comment: 'this is a comment' } 
    });
  });
  it('remove comment action', () => {
    expect(removeComment(0, 0)).toEqual({
      type: RMV_COMMENT, payload: { postIndex: 0, commentIndex: 0 }
    });
  });
});
