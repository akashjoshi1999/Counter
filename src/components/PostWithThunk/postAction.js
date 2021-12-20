import Axios from "axios";

export const getData = () => {
  return async function (dispatch) {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "POST_DATA", payload: response.data });
  };
};
