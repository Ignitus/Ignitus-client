import * as t from './actionTypes';

const initialState = { presets: [], isFetching: false };
function setContributorsData(action) {
  return Object.assign({}, { presets: action.data }, { isFetching: false });
}
function getContributorsData() {
  return Object.assign({}, { isFetching: true }, { presets: [] });
}

const contributorsReducer = (state = initialState, action) => {
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
