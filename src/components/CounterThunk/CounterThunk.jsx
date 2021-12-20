import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  inc,
  dec,
  getData,
  reset,
  incWithExtra,
  decWithExtra
} from "./CounterAction";

function CounterThunk() {
  const { counter, Data } = useSelector((state) => state.counterStart);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>Counter-{counter} </div>
        <input
          type="text"
          id="counter"
          name="counter"
          onChange={(e) => {
            e.target.value && dispatch(getData(e.target.value));
          }}
        />
        <br />
        <button onClick={() => dispatch(inc(Data))}>Inc</button>
        <br />
        <button onClick={() => dispatch(incWithExtra(Data))}>
          Inc with value
        </button>
        <br />
        <button onClick={() => dispatch(dec(Data))}>Dec</button>
        <br />
        <button onClick={() => dispatch(decWithExtra(Data))}>
          Dec with value
        </button>
        <br />
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

export default CounterThunk;
