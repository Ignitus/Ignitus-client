/* eslint-disable import/no-default-export */
import * as t from './actionTypes';

const RESET = {
  isFetching: false,
  message: '',
  success: false,
};

export const loginReducer = (
  state = { isFetching: false, message: '', success: false },
  action,
) => {
  switch (action.type) {
    case t.LOG_IN_RESPONSE:
      return { ...state, isFetching: false, ...action.data };

    case t.LOG_IN_REQUEST_USING_EMAIL:
    case t.LOG_IN_REQUEST_USING_USERNAME:
      return {
        ...state,
        isFetching: true,
        message: 'Processing...',
        success: false,
      };

    case t.LOG_USER_OUT:
      return RESET;

    case t.LOG_IN_CLEAR_PREVIOUS:
      return RESET;

    default:
      return state;
  }
};
