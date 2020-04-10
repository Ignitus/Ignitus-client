import {effects} from 'redux-saga';
import * as t from './actionTypes';
import * as api from '../../ignitus-Api';

const {call, put, takeLatest, all} = effects;

function* getTestimonialData() {
  try {
    const data = yield call(api.getTestimonialData);
    yield put({type: t.SET_TESTIMONIAL_DATA, data});
  } catch (e) {
    console.error(e);
    throw e;
  }
}

function* actionWatcher() {
  yield takeLatest(t.GET_TESTIMONIAL_DATA, getTestimonialData);
}

export default function* sagas() {
  yield all([actionWatcher()]);
}
