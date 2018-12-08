

import axios from 'axios';
import * as t from './constants';

if(sessionStorage.getItem('jwtToken')){
    axios.defaults.headers.common['access-token'] = sessionStorage.getItem('jwtToken');
}

export function getTestimonialData() {
  return axios.get(t.TESTIMONIAL_URL);
}

export function signUp(email, password){
	return axios.post(t.STUDENT_SIGN_UP, { email: email, password: password})
}

export function signIn(email, password){
	return axios.post(t.STUDENT_SIGN_IN, { email: email, password: password})
}

export function getContributorsData() {
  return axios.get(t.GITHUB_API);
}