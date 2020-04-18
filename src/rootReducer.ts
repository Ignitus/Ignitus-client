import { combineReducers } from 'redux';
import testimonial from './ignitus-HomePage/ignitus-Testimonial';
import contributors from './ignitus-AboutPage/ignitus-Team';
import sharedLogin from './ignitus-Authentication/ignitus-CommonLoginInterface';
import sharedSignup from './ignitus-Authentication/ignitus-CommonSignupInterface';

const rootReducer = combineReducers({
  [testimonial.constants.NAME]: testimonial.reducer,
  [sharedSignup.constants.NAME]: sharedSignup.reducer,
  [sharedLogin.constants.NAME]: sharedLogin.reducer,
  [contributors.constants.NAME]: contributors.reducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
