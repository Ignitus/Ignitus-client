import { isString, isObject } from '../../ignitus-Shared';
import * as t from './actionTypes';

export const logInRequestUsingEmail = (email, password, userType) => {
  if (!isString(email)) throw new Error(`email must be string: ${email}`);
  if (!isString(password)) {
    throw new Error(`password must be string: ${password}`);
  }

  return {
    type: t.LOG_IN_REQUEST,
    email,
    password,
    userType,
  };
};

export const logInRequestUsingUsername = (userName, password, userType) => {
  if (!isString(userName))
    throw new Error(`userName must be string: ${userName}`);
  if (!isString(password)) {
    throw new Error(`password must be string: ${password}`);
  }

  return {
    type: t.LOG_IN_REQUEST,
    userName,
    password,
    userType,
  };
};

export const logInResponse = data => {
  if (!isObject(data)) throw new Error(`data should be object: ${data}`);
  return { type: t.LOG_IN_RESPONSE, data };
};

export const logUserOut = () => ({ type: t.LOG_USER_OUT });
export const clearPreviousLogin = () => ({ type: t.LOG_IN_CLEAR_PREVIOUS });
