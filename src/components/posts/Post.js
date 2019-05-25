import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

function Post({ post, removePost }) {
  return (
    <li>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
      <FaTrashAlt onClick={removePost.bind(null, post.id)} />
    </li>
  );
}

Post.propTypes = {
  removePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};

export default Post;
