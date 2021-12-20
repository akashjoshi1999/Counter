import { combineReducers } from "redux";
const initial = { counter: 0, Data: 0 };
const CounterRed = (state = initial, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DEC":
      if (state.counter === 0)
        return {
          ...state,
          counter: (state.counter = 0)
        };
      else {
        return {
          ...state,
          counter: state.counter - 1
        };
      }
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
        counter: state.counter + action.payload
      };
    case "DECREMENT":
      if (state.counter === 0) {
        return {
          ...state,
          counter: (state.counter = 0)
        };
      } else {
        return {
          ...state,
          counter: state.counter - action.payload
        };
      }
    default:
      return state;
  }
};
export const Reducers = combineReducers({
  counter: CounterRed
});
export default CounterRed;
