import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as a from './actions';
import * as api from '../../ignitus-Api';

const { call, put, takeLatest, all } = effects;

function* signUp(action) {
  const { userName, email, password, userType } = action;

  try {
    const { data } = yield call(
      api.signUp,
      userName,
      email,
      password,
      userType,
    );
    yield put(a.signUpResponse(data));
  } catch (e) {
    yield put(a.signUpResponse(e.response.data));
  }
}

function* actionWatcher() {
  yield takeLatest(t.SIGN_UP_REQUEST, signUp);
}

export default function* sagas() {
  yield all([actionWatcher()]);
}
