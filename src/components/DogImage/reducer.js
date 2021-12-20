const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "API_CALL_REQUEST":
      return { ...state, fetching: true, error: null };
    case "API_CALL_SUCCESS":
      return { ...state, fetching: false, dog: action.dog };
    case "API_CALL_FAILURE":
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}
