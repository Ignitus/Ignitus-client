

import axios from 'axios';
import * as t from './constants';

export function getTestimonialData() {
  return axios.get(t.TESTIMONIAL_URL);
}

export function signUp(email, password) {
  return axios.post(t.STUDENT_SIGN_UP, { email, password })
    .then(response => response)
    .catch(error => console.log(error));
}
