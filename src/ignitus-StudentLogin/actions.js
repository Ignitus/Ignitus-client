


import * as t from './actionTypes';
import _ from 'lodash';


export const logInRequest = (email, password) => {
  if (!_.isString(email))
    throw new Error(`email must be number: ` + email);
  if (!_.isString(password))
    throw new Error(`password must be number: ` + password);

  return {type: t.LOG_IN_REQUEST, email, password};
};

export const logInResponse = data => {
  if (!_.isObject(data)) throw new Error(`data should be object: ` + data);
  return { type: t.LOG_IN_RESPONSE, data };
};