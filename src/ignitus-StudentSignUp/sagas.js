

import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as a from './actions';
import * as api from '../ignitus-Api';

const {
  call, put, takeLatest, all,
} = effects;

function* signUp(action) {
  const {email, password} = action;

  try {
    const { data } = yield call(api.signUp, email, password);
    yield put({ type: t.SIGN_UP, data });
  } catch (e) {
    console.log(e.message);
  }
}

function* actionWatcher() {
  yield takeLatest(t.SUBMIT, signUp);
}

export default function* sagas() {
  yield all([
    actionWatcher(),
  ]);
}
