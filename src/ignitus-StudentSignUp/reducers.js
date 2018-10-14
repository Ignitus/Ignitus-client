

import * as t from './actionTypes';

const studentReducer = (state = {}, action) => {
  switch (action.type) {
    case t.RESPONSE:
      return Object.assign({}, state, {isFetching: false}, action.data)
      break;

    case t.REQUEST:
      return Object.assign({}, state, {isFetching: true})
      break;

    default:
      return state;
  }
};

export default studentReducer;
