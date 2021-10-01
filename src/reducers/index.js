import { combineReducers } from "redux";
import userReducers from "./userReducers";
import sampleReducers from "./sampleReducers";

const rootReducer = combineReducers({ userReducers, sampleReducers });

export default rootReducer;
