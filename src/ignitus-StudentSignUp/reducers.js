

import * as t from './actionTypes';

const studentReducer = (state = {}, action) => {
console.log('action',action.data)
  switch (action.type) {
    case t.SIGN_UP:
      // const newState = state.concat(action.data);

      return state;
      break;

    default:
      return state;
  }
};

export default studentReducer;
