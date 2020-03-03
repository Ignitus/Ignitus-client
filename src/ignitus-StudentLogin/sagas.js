import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as a from './actions';
import * as api from '../ignitus-Api';

const {
 call, put, takeLatest, all,
} = effects;

function* signIn(action) {
  const { email, password } = action;
  try {
    const { data } = yield call(api.signIn, email, password);
    localStorage.setItem('authenticated', true);
    localStorage.setItem('data', JSON.stringify(data.data.clientData));

    yield put(a.logInResponse(data));
  } catch (e) {
    yield put(a.logInResponse(e.response.data));
  }
}

function* actionWatcher() {
  yield takeLatest(t.LOG_IN_REQUEST, signIn);
}

export default function* sagas() {
  yield all([actionWatcher()]);
}
