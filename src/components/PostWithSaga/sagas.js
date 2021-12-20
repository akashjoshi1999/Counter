import Axios from "axios";
import { put, call, takeEvery } from "redux-saga/effects";

function postData() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

function* getPost() {
  const post = yield call(postData);
  yield put({ type: "POST_DATA", post });
}

function* saga() {
  yield takeEvery("POST_DATA_FETCH", getPost);
}

export default saga;
