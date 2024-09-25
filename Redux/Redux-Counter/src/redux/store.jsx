import { createStore } from "redux";
//{createStore is depricated, now we use legacy_createStore}
import { counterReducer } from "./reducer";

export const store = createStore(counterReducer);
