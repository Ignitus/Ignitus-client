 
import { createSelector } from 'reselect';
import isObject from 'lodash/isObject';

export const selectProfessorState = state => state.professorSignUpReducer;

export const makeSelectProfessorData = () => createSelector(selectProfessorState, (substate) => {
  if (isObject(substate)) {
    return substate;
  }
  return [];
});
