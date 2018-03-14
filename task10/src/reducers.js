import data from './data/posts';

export function posts(state = data, action) {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.addPost
      ];
    default:
      return state
  }
}