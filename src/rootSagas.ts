import { all } from 'redux-saga/effects';
import Testimonial from './ignitus-HomePage/ignitus-Testimonial';
import studentSignUp from './ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-StudentSignUp';
import contributors from './ignitus-AboutPage/ignitus-Team';
import login from './ignitus-Authentication/ignitus-CommonLoginInterface';

export default function* rootSaga() {
  yield all([
    Testimonial.sagas.default(),
    studentSignUp.sagas.default(),
    login.sagas.default(),
    contributors.sagas.default(),
  ]);
}
