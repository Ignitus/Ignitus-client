

import * as t from './actionTypes';
import _ from 'lodash';


export const requestApi = (email, password, confirmPassword) => {
  if (!_.isString(email))
    throw new Error(`email must be number: ` + email);
  if (!_.isString(password))
    throw new Error(`password must be number: ` + password);

  return {type: t.REQUEST, email, password};
};

export const responseApi = data => {
  if (!_.isObject(data)) throw new Error(`data should be object: ` + data);
  return { type: t.RESPONSE, data };
};