import * as t from './actionTypes';
import { TeamActionType } from './types';

export const getContributorsData = ():TeamActionType => (
  { type: t.GET_CONTRIBUTORS_DATA }
);