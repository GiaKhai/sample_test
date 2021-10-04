import { combineReducers } from "redux";
import userReducers from "./userReducers";
import sampleReducers from "./sampleReducers";
import testReducers from "./testReducers";

const rootReducer = combineReducers({
  userReducers,
  sampleReducers,
  testReducers,
});

export default rootReducer;
