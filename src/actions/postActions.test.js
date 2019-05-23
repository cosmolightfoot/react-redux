import { addPost, removePost } from './postActions';

describe('blog actions test', () => {
  it('creates an add post action', () => {
    expect(addPost('My Post', 'I am Posting')).toEqual({ type: 'ADD_POST', payload: { title: 'My Post', body: 'I am Posting' } });
  });
  it('creates a remove post action', () => {
    expect(removePost(1)).toEqual({ type: 'RMV_POST', payload: 1 });
  });
});

