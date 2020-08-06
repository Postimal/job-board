const fetchReducer = (state, action) => {
  console.log(action);
  if (action.type === 'LOADING') {
    return {
      ...state,
      loading: true,
      error: null,
      data: [],
    };
  }
  if (action.type === 'RESPONSE_COMPLETED') {
    return {
      loading: false,
      error: null,
      data: action.payload,
    };
  }
  if (action.type === 'RESPONSE_FAILED') {
    return {
      loading: false,
      error: action.payload,
      data: [],
    };
  }

  return state;
};

export default fetchReducer;
