import * as t from './actionTypes';

const studentLoginReducer = (state = { isFetching: false, message: '', success: false }, action) => {
  switch (action.type) {
    case t.LOG_IN_RESPONSE:
      return Object.assign({}, state, { isFetching: false }, action.data);

    case t.LOG_IN_REQUEST:
      return Object.assign({}, state, { isFetching: true, message: 'Processing...', success: false });

    case t.LOG_USER_OUT:
      return { isFetching: false, message: '', success: false };

    default:
      return state;
  }
};

export default studentLoginReducer;
