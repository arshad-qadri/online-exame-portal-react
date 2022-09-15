import loginReducer from "./loginReducer";
import { combineReducers } from "redux";
import questionReducer from "./fetchQueTeducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  questions: questionReducer,
  theme: themeReducer
});

export default rootReducer;
