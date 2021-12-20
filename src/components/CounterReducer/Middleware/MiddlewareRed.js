export const MiddlewareRed = (action) => {
  if (action.type === "INCREMENT" || action.type === "DECREMENT") {
    if (action.payload >= 0) {
      return action.payload;
    } else {
      if (typeof action.payload === "string") {
        return (action.payload = 1);
      } else return parseInt(action.payload);
    }
  }
};
