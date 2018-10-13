

import * as t from './actionTypes';

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case t.SIGN_UP:
      const newState = state.concat([action.data]);
      return newState;
      break;

    default:
      return state;
  }
};

export default studentReducer;
