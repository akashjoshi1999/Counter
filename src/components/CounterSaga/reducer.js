const initialState = { counter: 0, Data: 0 };

const counterReducer = (state = initialState, { type, payload }) => {
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
      console.log(payload);
      return {
        ...state,
        counter: state.counter + Number(payload)
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
          counter: state.counter - Number(payload)
        };
      }
    case "INCREMENT_ASYNC":
      console.log(payload);
      return {
        ...state,
        counter: state.counter + Number(payload)
      };
    case "DECREMENT_ASYNC":
      if (state.counter === 0) {
        return {
          ...state,
          counter: (state.counter = 0)
        };
      } else {
        return {
          ...state,
          counter: state.counter - Number(payload)
        };
      }
    default:
      return state;
  }
};

export default counterReducer;
