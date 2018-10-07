

import axios from 'axios';
import * as t from './constants';

export function get_testimonial_data() {
  return axios.get(t.TESTIMONIAL_URL);
}
