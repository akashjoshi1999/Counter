const initialState = { counter: 0, Data: 0 };

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
        counter: 0,
        Data: (state.Data = 0)
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
        counter: Number(state.counter) + Number(+payload)
      };
    case "DECREMENT":
      return {
        ...state,
        counter: Number(state.counter) - Number(+payload)
      };
    default:
      return state;
  }
};

export default counterReducer;
