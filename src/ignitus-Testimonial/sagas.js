
import * as t from "./actionTypes";
import {effects} from 'redux-saga';
import * as a from "./actions";
import * as api from "../ignitus-Api";

const {call, put, takeLatest, all} = effects;

function *getTestimonialData(){
 try {
    const { data } = yield call(api.get_testimonial_data)
    yield put({ type: t.SET_TESTIMONIAL_DATA,data });
  } catch (e) {
    console.log(e.message);
  }
}

function *actionWatcher() {
     yield takeLatest(t.GET_TESTIMONIAL_DATA, getTestimonialData)
}

export default function* sagas() {
  yield all([
    actionWatcher(),
  ])
}

