import { createSelector } from 'reselect';

export const selectTeamState = state => state.teamReducer;

export const makeSelectTeamData = () => createSelector(selectTeamState, (substate) => {
  if (substate && substate.length > 0) {
    return substate[0].data;
  }
  return [];
});

