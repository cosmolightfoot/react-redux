export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(index, comment) {
  return { type: ADD_COMMENT, payload: { index, comment } };
}

export const RMV_COMMENT = 'RMV_COMMENT';

export function removeComment(postIndex, commentIndex) {
  return { type: RMV_COMMENT, payload: { postIndex, commentIndex } };
}
