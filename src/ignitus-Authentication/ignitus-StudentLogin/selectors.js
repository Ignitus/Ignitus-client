import { createSelector } from 'reselect';
import { isObject } from '../../ignitus-UtilityFunctions/utilityFunctions';

export const selectStudentState = state => state.studentLoginReducer;

export const makeSelectStudentData = () => createSelector(selectStudentState, (substate) => {
  if (isObject(substate)) {
    return substate;
  }
  return [];
});
