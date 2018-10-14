import { combineReducers } from 'redux';
import testimonial from './ignitus-Testimonial';
import studentSignUp from './ignitus-StudentSignUp';
import studentLogin from './ignitus-StudentLogin';


export default combineReducers({
	[testimonial.constants.NAME]  : testimonial.reducer,
	[studentSignUp.constants.NAME]: studentSignUp.reducer,
	[studentLogin.constants.NAME] : studentLogin.reducer
});
