import { combineReducers } from 'redux';
import testimonial from './ignitus-HomePage/ignitus-Testimonial';
import studentSignUp from './ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-StudentSignUp';
import contributors from './ignitus-AboutPage/ignitus-Team';
import sharedLogin from './ignitus-Authentication/ignitus-CommonLoginInterface';

const rootReducer = combineReducers({
  [testimonial.constants.NAME]: testimonial.reducer,
  [studentSignUp.constants.NAME]: studentSignUp.reducer,
  [sharedLogin.constants.NAME]: sharedLogin.reducer,
  [contributors.constants.NAME]: contributors.reducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
