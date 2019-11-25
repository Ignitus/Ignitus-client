

import * as t from './actionTypes';

const studentReducer = (state = {}, action) => {
  switch (action.type) {
    case t.SIGN_UP_RESPONSE:
      return Object.assign({}, state, { isFetching: false }, action.data);

    case t.SIGN_UP_REQUEST:
      return Object.assign({}, state, { isFetching: true });

    default:
      return state;
  }
};

export default studentReducer;
