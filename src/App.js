import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGraphDetails } from "./redux/actions";
import GraphComp from "./Component/GraphComp";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { graphDetails, isFetching } = useSelector(
    (state) => state.fetchGraphDataReducer
  );

  useEffect(() => {
    dispatch(fetchGraphDetails());
  }, []);

  return (
    <div className="App">
      <div className="demo-container">
        <div className="column-right">
          <GraphComp graphDetails={graphDetails} isFetching={isFetching} />
        </div>
      </div>
    </div>
  );
};

export default App;
