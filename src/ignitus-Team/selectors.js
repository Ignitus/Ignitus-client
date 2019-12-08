/* eslint-disable max-len */


import { createSelector } from 'reselect';
import isObject from 'lodash/isObject';

export const selectContributorsState = state => state.contributorsReducer;

export const makeSelectContributorsData = () => createSelector(selectContributorsState, (substate) => {
  if (isObject(substate)) { return substate; }
  return [];
});
