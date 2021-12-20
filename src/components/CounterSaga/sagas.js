import { put, takeEvery, delay } from "redux-saga/effects";

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INC" });
}

export function* decrementAsync() {
  yield delay(1000);
  yield put({ type: "DEC" });
}

export function* getData(action) {
  if (action.payload < 0 || isNaN(action.payload) === true) {
    yield put({ type: "DATA", payload: 1 });
  } else {
    yield put({ type: "DATA", payload: action.payload });
  }
}

function* saga() {
  yield takeEvery("VALIDATION", getData);
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

export default saga;
