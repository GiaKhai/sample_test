import { combineReducers } from "redux";
import userReducers from "./userReducers";
import sampleReducers from "./sampleReducers";
import worksheetReducers from "./worksheetReducers";
import meReducers from "./meReducers";

const rootReducer = combineReducers({
  meReducers,
  userReducers,
  sampleReducers,
  worksheetReducers,
});

export default rootReducer;
