

import { createSelector } from 'reselect';
import _ from 'lodash';

export const selectContributorsState = state => state.contributorsReducer;

export const makeSelectContributorsData = () => createSelector(selectContributorsState, (substate) => {
  if(_.isObject(substate))
    return substate
    
  return [];
});
