

import { createSelector } from 'reselect';
import _ from 'lodash';

export const selectStudentState = state => state.studentLoginReducer;

export const makeSelectStudentData = () => createSelector(selectStudentState, (substate) => {
  if(_.isObject(substate)){
  	return substate
  }
  return [];
});
