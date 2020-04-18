import * as t from './actionTypes';

const signUpReducer = (state = {}, action) => {
  switch (action.type) {
    case t.SIGN_UP_RESPONSE:
      return Object.assign({}, state, { isFetching: false }, action.data);

    case t.SIGN_UP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        message: 'Processing',
        success: false,
      });

    case t.CLEAR_PREVIOUS_SIGN_UP:
      return { isFetching: false, message: '', success: false };

    default:
      return state;
  }
};

export default signUpReducer;
