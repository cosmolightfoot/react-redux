export const ADD_POST = 'ADD_POST';
export const RMV_POST = 'RMV_POST';

export function addPost(title, body) {
  return { type: ADD_POST, payload: { title, body } };
}

export function removePost(title, body) {
  return { type: RMV_POST, payload: { title, body } };
}

