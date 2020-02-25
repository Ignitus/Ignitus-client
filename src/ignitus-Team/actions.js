
/* useful for keeping your bundle size small. */
import every from 'lodash/every';
import isObject from 'lodash/isObject';
import * as t from './actionTypes.ts';

export const getContributorsData = () => (
  { type: t.GET_CONTRIBUTORS_DATA }
);

export const setContributorsData = (data) => {
  if (!every(data, isObject)) throw new Error(`data should be array of objects: ${data}`);
  return { type: t.SET_CONTRIBUTORS_DATA, data };
};
