// ignitus-Testimonial sagas BoilerPlate
import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as a from './actions';
import apiGetTestimonialData from '../ignitus-Api';

const {
  call, put, takeLatest, all,
} = effects;

function* getTestimonialData() {
  try {
    const { data } = yield call(apiGetTestimonialData);
    yield put({ type: t.SET_TESTIMONIAL_DATA, data });
  } catch (e) {
    console.log(e.message);
  }
}

function* actionWatcher() {
  yield takeLatest(t.GET_TESTIMONIAL_DATA, getTestimonialData);
}

export default function* sagas() {
  yield all([
    actionWatcher(),
  ]);
}
