import * as t from './actionTypes';
import { TeamActionType } from './types';

const initialState = { presets: [], isFetching: false };
function setContributorsData(action: TeamActionType) {
  return Object.assign({}, { presets: action.data }, { isFetching: false });
}
function getContributorsData() {
  return Object.assign({}, { isFetching: true }, { presets: [] });
}

const contributorsReducer = (state = initialState, action: TeamActionType) => {
  switch (action.type) {
    case t.SET_CONTRIBUTORS_DATA:
      return setContributorsData(action);

    case t.GET_CONTRIBUTORS_DATA:
      return getContributorsData();

    default:
      return state;
  }
};

export default contributorsReducer;
