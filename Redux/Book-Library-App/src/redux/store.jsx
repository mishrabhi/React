import { combineReducers, createStore } from "redux";
import bookReducer from "./reducer";

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = createStore(rootReducer);

export default store;
