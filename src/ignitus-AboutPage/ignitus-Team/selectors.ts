/* eslint-disable max-len */
import { createSelector } from 'reselect';
import { isObject } from '../../ignitus-Shared';

export const selectContributorsState = (state: any) => state.contributorsReducer;

export const makeSelectContributorsData = () => createSelector(selectContributorsState, (substate) => {
  if (isObject(substate)) { return substate; }
  return [];
});
