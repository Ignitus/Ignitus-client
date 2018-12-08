
import * as t from './actionTypes';

const initialState = {
   contributorsData: []
};

const contributorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_CONTRIBUTORS_DATA:
      return setContributorsData(state, action);
      break;

    case t.GET_CONTRIBUTORS_DATA:
      return getContributorsData(state, action);
      break;

    default:
      return returnIntialState(state);
  }
};

function setContributorsData(state, action){
	const updatedState = state.data.concat(action.data)
  return Object.assign({}, { data: updatedState }, { isFetching: false });
}

function getContributorsData(state, action){
	const updatedState = state.data
    return Object.assign({}, { data: updatedState }, { isFetching: true });
}

function returnIntialState(state){
	const updatedState = state.contributorsData
    return Object.assign({}, { data: updatedState });
}

export default contributorsReducer;