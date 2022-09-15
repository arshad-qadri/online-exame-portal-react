import loginReducer from "./loginReducer";
import { combineReducers } from "redux";
import questionReducer from "./fetchQueTeducer";

const rootReducer = combineReducers({
  login: loginReducer,
  questions: questionReducer,
});

export default rootReducer;
