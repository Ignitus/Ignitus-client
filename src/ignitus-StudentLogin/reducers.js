


import * as t from './actionTypes';

const studentLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case t.LOG_IN_RESPONSE:
      return Object.assign({}, state, {isFetching: false}, action.data)
      break;

    case t.LOG_IN_REQUEST:
      return Object.assign({}, state, {isFetching: true})
      break;

    default:
      return state;
  }
};

export default studentLoginReducer;
