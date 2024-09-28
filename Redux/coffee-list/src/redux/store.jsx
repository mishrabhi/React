import { combineReducers } from "redux";
import { coffeeReducer } from "./reducer";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//Combine Reducer: if there is more than one reducer
const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

//Redux Thunk and Logger middleware
const logger = createLogger();
const middleware = [thunk, logger];

//store with middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
