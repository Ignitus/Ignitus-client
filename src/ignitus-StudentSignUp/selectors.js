
import { createSelector } from 'reselect';

export const selectStudentState = state => state.studentSignUpReducer;

export const makeSelectStudentData = () => createSelector(selectStudentState, (substate) => {
  if (substate && substate.length > 0) {
    return substate[0];
  }
  return [];
});
