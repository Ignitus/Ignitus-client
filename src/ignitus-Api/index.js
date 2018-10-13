

import axios from 'axios';
import * as t from './constants';

export function getTestimonialData() {
  return axios.get(t.TESTIMONIAL_URL);
}

export function signUp(email, password){

	console.log('recieved', email, password)
	// return axios.get(t.STUDENT_SIGN_UP);
	return []
}