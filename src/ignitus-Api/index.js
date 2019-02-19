

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
  return Promise.all([
    axios.get(t.FRONTEND_CONTRIBUTOR_API),
    axios.get(t.BACKEND_CONTRIBUTOR_API),
  ]).then(data => Array.from(new Set(data[0].data.concat(data[1].data))));
}