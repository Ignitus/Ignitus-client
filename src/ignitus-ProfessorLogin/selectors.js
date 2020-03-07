 import { createSelector } from 'reselect';
import isObject from 'lodash/isObject';

export const selectProfessorState = state => state.professorLoginReducer;

export const makeSelectProfessorData = () => createSelector(selectProfessorState, (substate) => {
  if (isObject(substate)) {
    return substate;
  }
  return [];
});
