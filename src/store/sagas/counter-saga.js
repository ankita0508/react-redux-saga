import { takeEvery, put, delay } from 'redux-saga/effects';
import { incrementAsync } from '../actions/counter-actions';
import { decrementAsync } from '../actions/counter-actions';

function* incrementCounterAsync() {
  yield delay(3000);
  yield put(incrementAsync(1));
}

function* decrementCounterAsync() {
  yield delay(3000);
  yield put(decrementAsync(1));
}

export function* incrementCounter() {
  yield takeEvery('INC', incrementCounterAsync);
}

export function* decrementCounter() {
  yield takeEvery('DEC', decrementCounterAsync);
}
