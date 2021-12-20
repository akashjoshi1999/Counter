import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { saga } from "./saga";
import { reducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const rootRuducer = combineReducers({ reducer });

export const store = createStore(rootRuducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
