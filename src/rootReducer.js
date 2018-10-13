import { combineReducers } from 'redux';
import testimonialReducer from './ignitus-Testimonial/reducers';
import studentSignUpReducer from './ignitus-StudentSignUp/reducers';

export default combineReducers({
  	testimonialReducer,
  	studentSignUpReducer
});
