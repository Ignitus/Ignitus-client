

// ignitus-Testimonial reducer BoilerPlate
import * as t from './actionTypes';

const TestimonialReducer = (state = [], action) => {
  switch (action.type) {
    case t.SET_TESTIMONIAL_DATA:
      const state = state.concat(action.data);
      return state;
      break;

    default:
      return state;
  }
};

export default TestimonialReducer;
