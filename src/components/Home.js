import React from 'react'
import CreatePost from '../containers/posts/CreatePost.js';
import AllPosts from '../containers/posts/AllPosts.js';

export default function Home() {
  return (
    <>
      <CreatePost />
      <AllPosts />
    </>
  );
}
