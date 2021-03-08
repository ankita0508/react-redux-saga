import { takeEvery, put, delay } from "redux-saga/effects";
import { incrementAsync } from "../actions/counter-actions";

function* incrementCounterAsync() {
  yield delay(3000);
  yield put(incrementAsync(1));
}

export function* incrementCounter() {
  yield takeEvery("INC", incrementCounterAsync);
}
