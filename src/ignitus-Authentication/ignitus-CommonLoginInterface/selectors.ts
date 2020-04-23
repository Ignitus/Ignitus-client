import { createSelector } from 'reselect';
import { isObject } from '../../ignitus-Shared';

export const selectState = state => state.loginReducer;

export const makeSelectData = () => createSelector(selectState, (substate) => {
  if (isObject(substate)) {
    return substate;
  }
  return [];
});
