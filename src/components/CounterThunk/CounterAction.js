export const inc = (data) => {
  return function (dispatch) {
    dispatch({ type: "INC", payload: +data });
  };
};
export const dec = (data) => {
  return function (dispatch) {
    dispatch({ type: "DEC", payload: data });
  };
};
export const reset = () => {
  return function (dispatch) {
    dispatch({ type: "RESET" });
  };
};
export const getData = (data) => {
  return function (dispatch) {
    if (data < 0 || isNaN(data) === true) {
      dispatch({ type: "DATA", payload: 1 });
    } else {
      dispatch({ type: "DATA", payload: data });
    }
  };
};
export const incWithExtra = (data) => {
  return function (dispatch) {
    dispatch({ type: "INCREMENT", payload: +data });
  };
};
export const decWithExtra = (data) => {
  return function (dispatch) {
    dispatch({ type: "DECREMENT", payload: data });
  };
};
