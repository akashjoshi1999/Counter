const intialState = {
  post: []
};

export const postReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "POST_DATA":
      return { ...state, post: payload };
    default:
      return state;
  }
};
