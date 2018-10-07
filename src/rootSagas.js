
import Testimonial from './ignitus-Testimonial';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    Testimonial.sagas.default()
  ]);
}
