import { combineReducers } from "redux";
import { fetchGraphDataReducer } from "./index";

const rootReducer = combineReducers({
  fetchGraphDataReducer: fetchGraphDataReducer,
});

export default rootReducer;
