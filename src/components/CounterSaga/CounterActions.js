export const inc = () => {
  return { type: "INC" };
};
export const dec = () => {
  return { type: "DEC" };
};
export const reset = () => {
  return { type: "RESET" };
};
export const getData = (data) => {
  return {
    type: "DATA",
    payload: data
  };
};

export const incWithExtra = (data) => {
  return { type: "INCREMENT", payload: data };
};

export const decWithExtra = (data) => {
  return { type: "DECREMENT", payload: data };
};

export const increAcy = () => {
  return { type: "INCREMENT_ASYNC" };
};

export const decreAcy = () => {
  return { type: "DECREMENT_ASYNC" };
};

export const Valid = (data) => {
  return { type: "VALIDATION", payload: data };
};
