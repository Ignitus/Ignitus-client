

import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as a from './actions';
import * as api from '../ignitus-Api';

const {
  call, put, takeLatest, all,
} = effects;

function* signUp(action) {
  const { username, email, password } = action;

  try {
    const { data } = yield call(api.signUp, username, email, password);
    yield put(a.signUpResponse(data));
  } catch (e) {
    yield put(a.signUpResponse(e.response.data));
  }
}

function* actionWatcher() {
  yield takeLatest(t.SIGN_UP_REQUEST, signUp);
}

export default function* sagas() {
  yield all([
    actionWatcher(),
  ]);
}
