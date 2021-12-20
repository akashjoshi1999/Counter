import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers } from "redux";
import saga from "./sagas";
import postReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const rootRuducer = combineReducers({ postReducer });

export const store = createStore(rootRuducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
