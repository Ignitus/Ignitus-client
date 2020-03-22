
import { createSelector } from 'reselect';
import { isObject } from '../../ignitus-UtilityFunctions/utilityFunctions';

export const selectStudentState = state => state.studentSignUpReducer;

export const makeSelectStudentData = () => createSelector(selectStudentState, (substate) => {
  if (isObject(substate)) {
    return substate;
  }
  return [];
});
