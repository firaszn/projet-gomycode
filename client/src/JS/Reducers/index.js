import { combineReducers } from "redux";
import userReducer from "./user";
import carReducer from "./product";

const rootReducer = combineReducers({userReducer,carReducer});

export default rootReducer;
