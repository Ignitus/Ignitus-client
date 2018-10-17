
import * as t from './actionTypes';

const testimonialReducer = (state = [], action) => {
  switch (action.type) {
    case t.SET_TESTIMONIAL_DATA:
      const newState = state.concat(action.data);
      return newState;
      break;

    default:
      return state;
  }
};

export default testimonialReducer;
