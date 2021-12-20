const initialState = { counter: 0, Data: 0 };

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
        Data: payload
      };
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + payload
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
          counter: state.counter - payload
        };
      }
    default:
      return state;
  }
};
