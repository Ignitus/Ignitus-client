import * as t from './actionTypes';

export const signUpReducer = (state = {}, action) => {
  switch (action.type) {
    case t.SIGN_UP_RESPONSE:
      return { ...state, isFetching: false, ...action.data };

    case t.SIGN_UP_REQUEST:
      return {
        ...state,
        isFetching: true,
        message: 'Processing',
        success: false,
      };

    case t.CLEAR_PREVIOUS_SIGN_UP:
      return { isFetching: false, message: '', success: false };

    default:
      return state;
  }
};
