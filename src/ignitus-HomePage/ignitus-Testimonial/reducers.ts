import * as t from './actionTypes';

export const testimonialReducer = (state = [], action) => {
  switch (action.type) {
    case t.SET_TESTIMONIAL_DATA:
      return action.data;

    default:
      return state;
  }
};
