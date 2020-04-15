import { all } from 'redux-saga/effects';
import Testimonial from './ignitus-HomePage/ignitus-Testimonial';
import contributors from './ignitus-AboutPage/ignitus-Team';
import login from './ignitus-Authentication/ignitus-CommonLoginInterface';
import signUp from './ignitus-Authentication/ignitus-CommonSignupInterface';

export default function* rootSaga() {
  yield all([
    Testimonial.sagas.default(),
    login.sagas.default(),
    signUp.sagas.default(),
    login.sagas.default(),
    contributors.sagas.default(),
  ]);
}
