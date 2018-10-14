
import { all } from 'redux-saga/effects';
import Testimonial from './ignitus-Testimonial';
import studentSignUp from './ignitus-StudentSignUp';
import studentLogin from './ignitus-StudentLogin';

export default function* rootSaga() {
  yield all([
    Testimonial.sagas.default(),
    studentSignUp.sagas.default(),
    studentLogin.sagas.default(),
  ]);
}
