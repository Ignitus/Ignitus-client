

import { createSelector } from 'reselect';
import isObject from 'lodash/isObject';

export const selectStudentState = state => state.studentLoginReducer;

export const makeSelectStudentData = () => createSelector(selectStudentState, (substate) => {
  if (isObject(substate)) {
    return substate;
  }
  return [];
});
