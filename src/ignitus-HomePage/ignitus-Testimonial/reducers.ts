import * as t from './actionTypes';

const testimonialReducer = (state = [], action) => {
  switch (action.type) {
    case t.SET_TESTIMONIAL_DATA:
      return state.concat(action.data);

    default:
      return state;
  }
};

export default testimonialReducer;
