import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  inc,
  dec,
  getData,
  reset,
  incWithExtra,
  decWithExtra
} from "./actions";

function Counter() {
  if (useSelector((state) => state.counter) === undefined) {
    return (
      <div>
        <a href="/">back</a>
      </div>
    );
  } else {
    const { counter, Data } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
      <>
        <div>
          <div>Counter: {counter} </div>
          <input
            type="text"
            id="counter"
            name="counter"            
            onChange={(e) => {
              dispatch(getData(e.target.value));
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
          <br />
          <a href="/">Back</a>
        </div>
      </>
    );
  }
}

export default Counter;
