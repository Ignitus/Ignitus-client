import * as t from './actionTypes';

const initialState = { presets: [], isFetching: false };

const contributorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_CONTRIBUTORS_DATA:
      return setContributorsData(state, action);
      break;

    case t.GET_CONTRIBUTORS_DATA:
      return getContributorsData(state, action);
      break;

    default:
      return state;
  }
};

function setContributorsData(state, action) {
  return Object.assign({}, { presets: action.data }, { isFetching: false });
}

function getContributorsData(state, action) {
  return Object.assign({}, { isFetching: true }, { presets: [] });
}

export default contributorsReducer;
