import {createSelector} from 'reselect';

export const selectTestimonialState = state => state.testimonialReducer;

export const makeSelectTestimonialData = () =>
  createSelector(
    selectTestimonialState,
    substate => {
      if (substate && substate.length > 0) {
        return substate;
      }
      return [];
    },
  );
