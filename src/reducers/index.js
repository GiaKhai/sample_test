import { combineReducers } from "redux";
import userReducers from "./userReducers";
import sampleReducers from "./sampleReducers";
import worksheetReducers from "./worksheetReducers";

const rootReducer = combineReducers({
  userReducers,
  sampleReducers,
  worksheetReducers,
});

export default rootReducer;
