import * as t from './actionTypes';
import { TeamActionType, TeamReducerReturnType } from './types';

const initialState = { presets: [], isFetching: false };
function setContributorsData(action: TeamActionType) {
  return { presets: action.data, isFetching: false };
}
function getContributorsData() {
  return { isFetching: true, presets: [] };
}

export const contributorsReducer = (
  state = initialState,
  action: TeamActionType,
): TeamReducerReturnType => {
  switch (action.type) {
    case t.SET_CONTRIBUTORS_DATA:
      return setContributorsData(action);

    case t.GET_CONTRIBUTORS_DATA:
      return getContributorsData();

    default:
      return state;
  }
};
