import React from 'react';
import PropTypes from 'prop-types';
import CommentsByPostId from '../../containers/comments/CommentsByPostId';
import CreateComment from '../../containers/comments/CreateComment';

function PostDetail({ post }) {
  const paragraphs = post.body.split('\n').map((p, i) => {
    return <p key={i}>{p}</p>;
  });
  
  return (
    <section>
      <h1>{post.title}</h1>
      {paragraphs}
      <CommentsByPostId postId={post.id} />
      <CreateComment postId={post.id} />
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;
