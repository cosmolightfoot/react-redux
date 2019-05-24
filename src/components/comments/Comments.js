import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, removeComment }) {
  const commentsList = comments.map((comment, i) => {
    return (<Comment key={i} comment={comment} removeComment={removeComment} />);
  });

  return (
    <ul>
      {commentsList}
    </ul>
  );
} 

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  removeComment: PropTypes.func.isRequired
};

export default Comments;
