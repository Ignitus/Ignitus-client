import * as t from "./actionTypes";
import _ from "lodash";

export const logInRequest = (email, password) => {
  if (!_.isString(email)) throw new Error(`email must be string: ` + email);
  if (!_.isString(password))
    throw new Error(`password must be string: ` + password);

  return { type: t.LOG_IN_REQUEST, email, password };
};

export const logInResponse = data => {
  if (!_.isObject(data)) throw new Error(`data should be object: ` + data);
  return { type: t.LOG_IN_RESPONSE, data };
};

export const logUserOut = data => {
	console.log('called');
  return { type: t.LOG_USER_OUT };
};
