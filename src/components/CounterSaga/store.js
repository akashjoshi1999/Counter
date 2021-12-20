import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers } from "redux";
import saga from "./sagas";
import counterReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const rootRuducer = combineReducers({ counterReducer });

export const store = createStore(rootRuducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
