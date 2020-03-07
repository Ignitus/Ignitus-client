 /* useful for keeping your bundle size small. */
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import * as t from './actionTypes';


export const logInRequest = (email, password) => {
  if (!isString(email)) throw new Error(`email must be string: ${email}`);
  if (!isString(password)) { throw new Error(`password must be string: ${password}`); }

  return { type: t.LOG_IN_REQUEST, email, password };
};

export const logInResponse = (data) => {
  if (!isObject(data)) throw new Error(`data should be object: ${data}`);
  return { type: t.LOG_IN_RESPONSE, data };
};

export const logUserOut = () => ({ type: t.LOG_USER_OUT });
