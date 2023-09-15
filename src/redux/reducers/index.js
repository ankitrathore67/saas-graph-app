const initialState = {
  isFetching: false,
  graphDetails: {},
};

export const fetchGraphDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GRAPH_DATA_REQUEST":
      return {
        isFetching: action.payload,
        graphDetails: {},
      };
    case "GET_GRAPH_DATA_SUCCESS":
      return {
        isFetching: false,
        graphDetails: action.payload,
      };
    default:
      return state;
  }
};
