import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (<li>{post.title}</li>);
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};
