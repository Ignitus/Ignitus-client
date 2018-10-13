

import * as t from './actionTypes';
import _ from 'lodash';


export const submit = (email, password, confirmPassword) => {
  if (!_.isString(email))
    throw new Error(`email must be number: ` + email);
  if (!_.isString(password))
    throw new Error(`password must be number: ` + password);

  return {type: t.SUBMIT, email, password};
};