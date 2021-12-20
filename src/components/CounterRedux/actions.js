export const inc = (data) => {
    return {
      type: "INC",
      payload: +data
    };
  };
  export const dec = (data) => {
    return {
      type: "DEC",
      payload: data
    };
  };
  export const reset = () => {
    return {
      type: "RESET"
    };
  };
  export const getData = (data) => {
    return {
      type: "DATA",
      payload: data
    };
  };
  export const incWithExtra = (data) => {
    return {
      type: "INCREMENT",
      payload: +data
    };
  };
  export const decWithExtra = (data) => {
    return {
      type: "DECREMENT",
      payload: data
    };
  };
  