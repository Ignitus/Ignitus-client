
import * as t from './actionTypes';

export const set_testimonial_data = (data) => {
  	return {type : t.SET_TESTIMONIAL_DATA, data}
};

export const get_testimonial_data = () => {
  	return {type : t.GET_TESTIMONIAL_DATA}
};
