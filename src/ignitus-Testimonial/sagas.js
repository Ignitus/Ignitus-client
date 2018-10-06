
import * as t from "./actionTypes";
import {effects} from 'redux-saga';
import * as a from "./actions";
import * as api from "idv-api";

const {call, put, takeLatest, all} = effects;

export function* fetchVersion(action) {
  const calls = {
    frontend: call(api.fetchFrontendVersion),
    backend: call(api.fetchBackendVersion)
  };

  const {frontend, backend} = yield all(calls);
  const data = {frontend: frontend.data, backend: backend.data.backend};
  yield put(a.fetchVersion(data));
}

export function* watchFetchVersion() {
  yield takeLatest(t.VERSION_REQUESTED, fetchVersion);
}

export default function* sagas() {
  yield all([
    watchFetchVersion()
  ])
}
