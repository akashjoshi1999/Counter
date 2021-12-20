import React, { useReducer } from "react";
import { MiddlewareRed } from "./Middleware/MiddlewareRed";

const initialState = { counter: 0, Data: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "RESET":
      return {
        ...state,
        counter: (state.counter = 0)
      };
    case "DATA":
      return {
        ...state,
        Data: action.payload
      };
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + +action.payload
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};
const useReducerWithMiddleware = (reducer, initialState, MiddlewareRed) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchWithMiddleware = (action) => {
    MiddlewareRed(action);
    dispatch(action);
  };

  return [state, dispatchWithMiddleware];
};

//main
export default function CounterReducer() {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [state, dispatch] = useReducerWithMiddleware(
    reducer,
    initialState,
    MiddlewareRed
  );

  return (
    <>
      <div>
        <div>Counter: {state.counter} </div>
        <input
          type="text"
          id="counter"
          name="counter"
          value={state.Data}
          onChange={(e) => dispatch({ type: "DATA", payload: e.target.value })}
        />
        <br />
        <button onClick={() => dispatch({ type: "INC" })}>Inc</button>
        <br />
        <button
          onClick={() => dispatch({ type: "INCREMENT", payload: state.Data })}
        >
          Inc with value
        </button>
        <br />

        <button onClick={() => dispatch({ type: "DEC" })}>Dec</button>
        <br />
        <button
          onClick={() => dispatch({ type: "DECREMENT", payload: state.Data })}
        >
          Dec with value
        </button>
        <br />
        <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
        <br />
        <br />
        <a href="/">Back</a>
      </div>
    </>
  );
}
