import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as api from '../ignitus-Api';

const {
  call, put, takeLatest, all,
} = effects;

function* getContributorsData() {
  try {
    // const { data } = yield call(api.getContributorsData);

    const data = [{
      avatar_url: "https://avatars3.githubusercontent.com/u/13464678?v=4",
      contributions: 190,
      events_url: "https://api.github.com/users/divyanshu-rawat/events{/privacy}",
      followers_url: "https://api.github.com/users/divyanshu-rawat/followers",
      following_url: "https://api.github.com/users/divyanshu-rawat/following{/other_user}",
      gists_url: "https://api.github.com/users/divyanshu-rawat/gists{/gist_id}",
      gravatar_id: "",
      html_url: "https://github.com/divyanshu-rawat",
      id: 13464678,
      login: "divyanshu-rawat",
      node_id: "MDQ6VXNlcjEzNDY0Njc4",
      organizations_url: "https://api.github.com/users/divyanshu-rawat/orgs",
      received_events_url: "https://api.github.com/users/divyanshu-rawat/received_events",
      repos_url: "https://api.github.com/users/divyanshu-rawat/repos",
      site_admin: false,
      starred_url: "https://api.github.com/users/divyanshu-rawat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/divyanshu-rawat/subscriptions",
      type: "User",
      url: "https://api.github.com/users/divyanshu-rawat",
    }]

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
