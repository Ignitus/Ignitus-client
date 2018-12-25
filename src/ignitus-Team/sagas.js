import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as api from '../ignitus-Api';

const {
  call, put, takeLatest, all,
} = effects;

function* getContributorsData() {
  try {
    const { data } = yield call(api.getContributorsData);
    yield put({ type: t.SET_CONTRIBUTORS_DATA, data });
  } catch (e) {
    console.log(e.message);
  }
}

function* actionWatcher() {
  yield takeLatest(t.GET_CONTRIBUTORS_DATA, getContributorsData);
}

export default function* sagas() {
  yield all([
    actionWatcher(),
  ]);
}
