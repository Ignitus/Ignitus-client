
import { createSelector } from 'reselect';
import _ from 'lodash';

export const selectStudentState = state => state.studentSignUpReducer;

export const makeSelectStudentData = () => createSelector(selectStudentState, (substate) => {
  if (_.isObject(substate)) {
    return substate;
  }
  return [];
});
