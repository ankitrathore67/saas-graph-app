import graphMockData from "src/mockData";

export const fetchGraphDetails = () => {
  return (dispatch) => {
    dispatch({ type: "GET_GRAPH_DATA_REQUEST", payload: true });
    setTimeout(() => {
      dispatch({
        type: "GET_GRAPH_DATA_SUCCESS",
        payload: graphMockData,
      });
    }, 500);
  };
};
