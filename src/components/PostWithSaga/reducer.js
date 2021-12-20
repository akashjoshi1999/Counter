const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "POST_DATA":
      return {
        ...state,
        post: action.post
      };
    default:
      return state;
  }
};

export default postReducer;
