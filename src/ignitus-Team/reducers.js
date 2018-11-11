
import * as t from './actionTypes';

const teamReducer = (state = [], action) => {
  switch (action.type) {
    case t.SET_TEAM_DATA:
      const newState = state.concat(action.data);
      return newState;
      break;

    default:
      return state;
  }
};

export default teamReducer;
