

import * as t from "./actionTypes";
import _ from "lodash";

export const getContributorsData = () => (
	 { type: t.GET_CONTRIBUTORS_DATA }
);

export const setContributorsData = data => {
  if (!_.every(data,_.isObject)) throw new Error(`data should be array of objects: ` + data);
  return { type: t.SET_CONTRIBUTORS_DATA, data };
};
