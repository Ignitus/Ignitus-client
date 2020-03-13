
import { all } from 'redux-saga/effects';
import Testimonial from './ignitus-HomePage/ignitus-Testimonial';
import studentSignUp from './ignitus-Authentication/ignitus-StudentSignUp';
import studentLogin from './ignitus-Authentication/ignitus-StudentLogin';
import contributors from './ignitus-AboutPage/ignitus-Team';

export default function* rootSaga() {
  yield all([
    Testimonial.sagas.default(),
    studentSignUp.sagas.default(),
    studentLogin.sagas.default(),
    contributors.sagas.default(),
  ]);
}
