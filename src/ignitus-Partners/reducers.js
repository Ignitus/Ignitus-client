// ignitus-Testimonial reducer BoilerPlate
import * as t from './actionTypes';
// confused as to why you have duplicate reducers
const initialState = {
  data: [],
};

const TestimonialReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case t.SET_TESTIMONIAL_DATA:
      return {
        ...state,
        data,
      };

    default:
      return state;
  }
};

export default TestimonialReducer;
