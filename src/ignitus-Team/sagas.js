import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as api from '../ignitus-Api';

const {
  call, put, takeLatest, all,
} = effects;

function* getTeamData() {
  try {
    const { data } = yield call(api.getTeamData);
    yield put({ type: t.SET_TEAM_DATA, data });
  } catch (e) {
    console.log(e.message);
  }
}

function* actionWatcher() {
  yield takeLatest(t.GET_TEAM_DATA, getTeamData);
}

export default function* sagas() {
  yield all([
    actionWatcher(),
  ]);
}
