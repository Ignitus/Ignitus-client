/* eslint-disable import/extensions */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-plusplus */

import axios from 'axios';
import * as t from './constants';
import * as DBHelper from './dbhelper';

if (sessionStorage.getItem('jwtToken')) {
  axios.defaults.headers.common['access-token'] = sessionStorage.getItem(
    'jwtToken',
  );
}

export async function getTestimonialData() {
  try {
    if (navigator.onLine) {
      const resp = await axios.get(t.TESTIMONIAL_URL);
      await DBHelper.updateDataInDB(t.TESTIMONIALS_STORE, resp.data.data);
      return resp.data.data;
    }
    return await DBHelper.getDataFromDB(t.TESTIMONIALS_STORE);
  } catch (err) {
    return new Promise((reject) => reject(err));
  }
}

export function signUp(email, password, userType) {
  return axios.post(t.STUDENT_SIGN_UP, { email, password, userType });
}

export function signIn(email, password, userType) {
  return axios.post(t.STUDENT_SIGN_IN, { email, password, userType });
}

async function getHeaders(name) {
  const item = await DBHelper.getItemFromDB(t.COND_HEADERS_STORE, name);

  if (item) {
    return {
      headers: {
        'If-None-Match': item.etag,
      },
      validateStatus: (status) => (status >= 200 && status < 300) || status === 304,
    };
  }
  return {};
}

export async function getContributorsData() {
  try {
    if (navigator.onLine) {
      const frontendConfig = await getHeaders('gh-frontend-contrib');
      const backendConfig = await getHeaders('gh-backend-contrib');

      const resp = await Promise.all([
        axios.get(t.FRONTEND_CONTRIBUTOR_API, frontendConfig),
        axios.get(t.BACKEND_CONTRIBUTOR_API, backendConfig),
      ]);

      if (resp[0].status === 304 && resp[1].status === 304) {
        const data = await DBHelper.getDataFromDB(t.CONTRIBUTORS_STORE);
        return data;
      }

      await DBHelper.updateDataInDB(t.COND_HEADERS_STORE, [
        {
          name: 'gh-frontend-contrib',
          etag: resp[0].headers.etag,
        },
        {
          name: 'gh-backend-contrib',
          etag: resp[1].headers.etag,
        },
      ]);

      const data = Array.from(new Set(resp[0].data.concat(resp[1].data)));

      const result = [];

      async function filterdata() {
        for (let i = 0; i < data.length; i++) {
          for (let j = i + 1; j < data.length; j++) {
            if (data[i].id === data[j].id) {
              data[i].contributions += data[j].contributions;
              data[j].contributions = 0;
            }
          }
        }

        for (let i = 0; i < data.length; i++) {
          if (data[i].contributions) {
            result.push(data[i]);
          }
        }
      }

      await filterdata();
      await DBHelper.updateDataInDB(t.CONTRIBUTORS_STORE, result);
      return result;
    }
    return await DBHelper.getDataFromDB(t.CONTRIBUTORS_STORE);
  } catch (err) {
    return new Promise((reject) => reject(err));
  }
}
