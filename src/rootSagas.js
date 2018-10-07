
import { all } from 'redux-saga/effects';
import Testimonial from './ignitus-Testimonial';

export default function* rootSaga() {
  yield all([
    Testimonial.sagas.default(),
  ]);
}
