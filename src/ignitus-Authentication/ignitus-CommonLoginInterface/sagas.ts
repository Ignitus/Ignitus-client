import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as a from './actions';
import * as api from '../../ignitus-Api';

const { call, put, takeLatest, all } = effects;

function* signInUsingEmail(action) {
  const { email, password, userType } = action;
  try {
    const data = yield call(api.signInUsingEmail, email, password, userType);
    if (!data.data.data) {
      /* eslint-disable no-throw-literal */
      throw { ...data };
    } else {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('data', JSON.stringify(data.data.data.clientData));
      yield put(a.logInResponse(data.data));
    }
  } catch (e) {
    yield put(a.logInResponse(e.data));
  }
}

function* signInUsingUsername(action) {
  const { email, password, userType } = action;
  try {
    const data = yield call(api.signInUsingUsername, email, password, userType);
    if (!data.data.data) {
      /* eslint-disable no-throw-literal */
      throw { ...data };
    } else {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('data', JSON.stringify(data.data.data.clientData));
      yield put(a.logInResponse(data.data));
    }
  } catch (e) {
    yield put(a.logInResponse(e.data));
  }
}

function* actionWatcher() {
  yield takeLatest(t.LOG_IN_REQUEST_USING_EMAIL, signInUsingEmail);
  yield takeLatest(t.LOG_IN_REQUEST_USING_USERNAME, signInUsingUsername);
}

export default function* sagas() {
  yield all([actionWatcher()]);
}
