import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  inc,
  dec,
  getData,
  reset,
  incWithExtra,
  decWithExtra,
  increAcy,
  decreAcy,
  Valid
} from "./CounterActions";

function CounterSaga() {
  const { counter, Data } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>Counter: {counter} </div>
        <input
          type="text"
          id="counter"
          name="counter"
          // value={Data}
          onChange={(e) => {
            e.target.value && dispatch(Valid(e.target.value));
          }}
        />
        <br />
        <button onClick={() => dispatch(inc())}>Inc</button>
        <br />
        <button onClick={() => dispatch(incWithExtra(Data))}>
          Inc with value
        </button>
        <br />
        <button onClick={() => dispatch(dec())}>Dec</button>
        <br />
        <button onClick={() => dispatch(decWithExtra(Data))}>
          Dec with value
        </button>
        <br />
        <button onClick={() => dispatch(reset())}>reset</button>
        <br />
        <button onClick={() => dispatch(increAcy(Data))}>Incr Async</button>
        <br />
        <button onClick={() => dispatch(decreAcy(Data))}>Dexre Async</button>
      </div>
    </>
  );
}

export default CounterSaga;
