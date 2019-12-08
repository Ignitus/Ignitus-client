import * as t from './actionTypes';

const TestimonialReducer = (state = [], action) => {
  switch (action.type) {
    case t.SET_TESTIMONIAL_DATA:
      return state.concat(action.data);

    default:
      return state;
  }
};

export default TestimonialReducer;
