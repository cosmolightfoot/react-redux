import { getPosts, getPost } from './postSelectors';

describe('post selector tests', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'hi', body: 'hi there' },
        { title: 'hi2', body: 'hi there2' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { id: 0, title: 'hi', body: 'hi there' },
      { id: 1, title: 'hi2', body: 'hi there2' }
    ]);
  });
  it('gets a post by id', () => {
    const state = {
      posts: [
        { title: 'hi', body: 'hi there' },
        { title: 'hi2', body: 'hi there2' }
      ]
    };

    expect(getPost(state, 1)).toEqual({ id: 1, title: 'hi2', body: 'hi there2' });
  });
});
