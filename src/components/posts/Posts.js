import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';


function Posts({ posts, removePost }) {
  const postList = posts.map(post => {
    return (<Post key={post.id} post={post} removePost={removePost} />);
  });

  return (
    <ul>
      {postList}
    </ul>
  );
}

Posts.propTypes = {
  removePost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Posts;
