import { signUpReducer as reducer } from './reducers';
import * as sagas from './sagas';
import * as actions from './actions';
import * as constants from './constants';

export default {
  reducer,
  sagas,
  actions,
  constants,
};
