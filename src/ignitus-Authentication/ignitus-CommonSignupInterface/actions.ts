import {
  isString,
  isObject,
} from '../../ignitus-Shared';
import * as t from './actionTypes';

export const signUpRequest = (email: string, password: string, userType: 'student' | 'professor') => {
  if (!isString(email)) {
    throw new Error(`email must be string: ${email}`);
  }
  if (!isString(password)) {
    throw new Error(`password must be string: ${password}`);
  }

  return { type: t.SIGN_UP_REQUEST, email, password, userType };
};

export const signUpResponse = (data) => {
  if (!isObject(data)) throw new Error(`data should be object: ${data}`);
  return { type: t.SIGN_UP_RESPONSE, data };
};

export const clearPreviousSignUp = () => ({ type: t.CLEAR_PREVIOUS_SIGN_UP });
