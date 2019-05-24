import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

function Comment({ id, comment, removeComment }) {
  return (
    <li>
      <p>{comment}</p>
      <FaTrashAlt onClick={removeComment.bind(null, id)} />
    </li>
  );
}

Comment.proptypes = {
  id: PropTypes.number.isRequired,
  removeComment: PropTypes.func.isRequired,
  comment: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
};

export default Comment;
