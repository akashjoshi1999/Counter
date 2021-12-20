import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { postReducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  post: postReducer
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
