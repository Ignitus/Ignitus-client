import { combineReducers } from 'redux';
import testimonial from './ignitus-Testimonial';
import studentSignUp from './ignitus-StudentSignUp';
import studentLogin from './ignitus-StudentLogin';
import contributors from './ignitus-Team';


const rootReducer = combineReducers({
  [testimonial.constants.NAME]: testimonial.reducer,
  [studentSignUp.constants.NAME]: studentSignUp.reducer,
  [studentLogin.constants.NAME]: studentLogin.reducer,
  [contributors.constants.NAME]: contributors.reducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;