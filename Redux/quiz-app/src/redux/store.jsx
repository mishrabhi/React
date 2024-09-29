import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducer";
import quizReducer from "./reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
