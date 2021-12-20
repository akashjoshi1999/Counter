import { put, takeEvery, delay } from "redux-saga/effects";

export function* incrementAsync(data) {
  yield delay(1000);
  // yield put({ type: 'INC'})
  yield put({ type: "INCREMENT", payload: +data });
}

export function* decrementAsync(data) {
  yield delay(1000);
  // yield put({ type: 'DEC'})
  yield put({ type: "DECREMENT", payload: data });
}

export function* getData(data) {
  if (data < 0 || isNaN(data) === true) {
    yield put({ type: "DATA", payload: 1 });
  } else {
    yield put({ type: "DATA", payload: data });
  }
}

function* saga() {
  yield takeEvery("VALIDATTION", getData);
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

export default saga;
