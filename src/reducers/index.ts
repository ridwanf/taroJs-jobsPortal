import { combineReducers } from "redux";
import userReducer from "./user";
import jobReducer from "./job";

const rootReducer = combineReducers({
  user: userReducer,
  job: jobReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
